import { game } from '../handlers/gameHandlers.js';

function generatePlayer() {
	const block1 = generateBlock(3);
	const block2 = generateBlock(2);
	const block3 = generateBlock(2);

	const combinedArray = [...block1.indexes, ...block2.indexes, ...block3.indexes];

	const set = new Set([...block1.indexes, ...block2.indexes, ...block3.indexes]);

	if (set.size !== combinedArray.length) {
		return generatePlayer();
	}

	return {
		block1,
		block2,
		block3,
	};
}

function generateBlock(size = 2) {
	const isVertical = Math.random() < 0.5 ? true : false;
	const indexes = generateBlockIndexes(size, isVertical);

	return {
		size,
		isVertical,
		indexes,
	};
}

function generateBlockIndexes(size = 2, isVertical: boolean) {
	const indexes: number[] = [];
	const index = Math.floor(Math.random() * Math.pow(game.GAME_SIZE, 2));

	let row = Math.floor(index / game.GAME_SIZE);
	let column = index % game.GAME_SIZE;

	while (isVertical && row > 0 && row + size >= game.GAME_SIZE) {
		row--;
	}
	while (!isVertical && column > 0 && column + size >= game.GAME_SIZE) {
		column--;
	}

	indexes.push(row * game.GAME_SIZE + column);

	for (let i = 1; i < size; i++) {
		indexes.push(
			isVertical ?
				row * game.GAME_SIZE + column + game.GAME_SIZE * i
			:	row * game.GAME_SIZE + column + i,
		);
	}

	return indexes;
}

export { generatePlayer };
