import { elements } from '../elements.js';
import { generatePlayer } from '../utils/helpers.js';
import { game } from './gameHandlers.js';

interface Block {
	size: number;
	isVertical: boolean;
	indexes: number[];
}

const board: Record<string, Record<string, Block>> = {
	player1: generatePlayer(),
	player2: generatePlayer(),
};

function initBoard() {
	let fragment1 = new DocumentFragment();
	let fragment2 = new DocumentFragment();

	for (let i = 0; i < game.GAME_SIZE * game.GAME_SIZE; i++) {
		const item1 = document.createElement('span');
		item1.classList.add('item', 'player1-item');
		item1.dataset['id'] = `${i}`;

		const item2 = document.createElement('span');
		item2.classList.add('item', 'player2-item');
		item2.dataset['id'] = `${i}`;

		fragment1.append(item1);
		fragment2.append(item2);
	}

	(elements['player1Grid'] as HTMLElement).append(fragment1);
	(elements['player2Grid'] as HTMLElement).append(fragment2);

	addBlocksAtIndexes();
}

function addBlocksAtIndexes() {
	const player1GridItems = [
		...(elements['player1GridItems'] as HTMLCollectionOf<HTMLSpanElement>),
	];
	const player2GridItems = [
		...(elements['player2GridItems'] as HTMLCollectionOf<HTMLSpanElement>),
	];

	for (const player in board) {
		for (const block in board[player]) {
			const indexes = board[player][block]!.indexes;

			for (const id of indexes) {
				if (player === 'player1') {
					player1GridItems?.at(id)?.classList.add('block');
				} else if (player === 'player2') {
					player2GridItems?.at(id)?.classList.add('block');
				}
			}
		}
	}
}

export { board, initBoard };
