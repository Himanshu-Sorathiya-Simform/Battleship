import { game } from './handlers/gameHandlers.js';

interface Elements {
	[key: string]: HTMLElement | HTMLElement[] | HTMLCollectionOf<Element>;
}

const elements: Elements = {
	winnerScreen: <HTMLParagraphElement>document.querySelector('.winner-screen')!,
	gameArea: <HTMLDivElement>document.querySelector('.game-area')!,
	player1Grid: <HTMLDivElement>document.querySelector('.player1-grid')!,
	player2Grid: <HTMLDivElement>document.querySelector('.player2-grid')!,
	player1GridItems: document.getElementsByClassName('player1-item'),
	player2GridItems: document.getElementsByClassName('player2-item'),
	player1PlayArea: <HTMLDivElement>document.querySelector('.player1-play-area')!,
	player2PlayArea: <HTMLDivElement>document.querySelector('.player2-play-area')!,
	player1Header: <HTMLDivElement>document.querySelector('.player1-play-area header')!,
	player2Header: <HTMLDivElement>document.querySelector('.player2-play-area header')!,
};

(elements['player1Grid'] as HTMLDivElement).style.gridTemplateColumns =
	`repeat(${game.GAME_SIZE}, 1fr)`;
(elements['player2Grid'] as HTMLDivElement).style.gridTemplateColumns =
	`repeat(${game.GAME_SIZE}, 1fr)`;

export { elements };
