import { elements } from '../elements.js';
import { generateBlocks } from '../utils/helpers.js';
import { game } from './gameHandlers.js';

const board = {
	initBoard,
	initBlocks,
};

function initBoard() {
	let fragment1 = new DocumentFragment();
	let fragment2 = new DocumentFragment();

	for (let i = 0; i < game.GAME_SIZE * game.GAME_SIZE; i++) {
		const item = document.createElement('span');
		item.classList.add('item');
		item.dataset['id'] = `${i}`;

		fragment1.append(item);
		fragment2.append(item.cloneNode(true));
	}

	(elements['player1Grid'] as HTMLElement).append(fragment1);
	(elements['player2Grid'] as HTMLElement).append(fragment2);
}

function initBlocks() {
	(elements['player1BlocksArea'] as HTMLElement).append(...generateBlocks(game.user1));
	(elements['player2BlocksArea'] as HTMLElement).append(
		...generateBlocks(game.user2, game.player2),
	);
}

export { board };
