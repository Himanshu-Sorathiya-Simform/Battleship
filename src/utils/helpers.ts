import type { User } from '../types.js';

const cell = <HTMLSpanElement>document.querySelector('.item')!;

const cellSize = cell?.getBoundingClientRect().width;

function generateBlock(size = 2, user: User, player: boolean) {
	const block = document.createElement('button');

	const isVertical = Math.random() < 0.5 ? true : false;

	block.style.height = `${(cellSize && (isVertical ? cellSize * size : cellSize)) || 0}px`;
	block.style.width = `${(cellSize && (isVertical ? cellSize : cellSize * size)) || 0}px`;
	block.classList.add('block', user);

	if (!player) block.classList.add('hidden');

	return block;
}

function generateBlocks(user: User, player = true) {
	const block1 = generateBlock(3, user, player);
	const block2 = generateBlock(2, user, player);
	const block3 = generateBlock(2, user, player);

	return [block1, block2, block3] as [
		HTMLButtonElement,
		HTMLButtonElement,
		HTMLButtonElement,
	];
}

export { generateBlocks };
