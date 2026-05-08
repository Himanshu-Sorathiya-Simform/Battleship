import { game } from './handlers/gameHandlers.js';

interface Elements {
	[key: string]: HTMLElement | HTMLElement[] | HTMLCollectionOf<Element>;
}

const elements: Elements = {
	gameArea: <HTMLDivElement>document.querySelector('.game-area')!,
	player1Grid: <HTMLDivElement>document.querySelector('.player1-grid')!,
	player2Grid: <HTMLDivElement>document.querySelector('.player2-grid')!,
	player1GridItems: document.getElementsByClassName('player1-item'),

	player2GridItems: document.getElementsByClassName('player2-item'),

	player1BlocksArea: <HTMLDivElement>document.querySelector('.player1-blocks')!,
	player2BlocksArea: <HTMLDivElement>document.querySelector('.player2-blocks')!,
};

(elements['player1Grid'] as HTMLDivElement).style.gridTemplateColumns =
	`repeat(${game.GAME_SIZE}, 1fr)`;
(elements['player2Grid'] as HTMLDivElement).style.gridTemplateColumns =
	`repeat(${game.GAME_SIZE}, 1fr)`;

export { elements };
