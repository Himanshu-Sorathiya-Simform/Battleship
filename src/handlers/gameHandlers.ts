import { elements } from '../elements.js';
import { handleBoardClick } from '../index.js';
import type { User } from '../types.js';

interface Game {
	GAME_SIZE: number;
	user1: User;
	user2: User;
	player2: boolean;
	currentPlay: User;
	player1Points: number;
	player2Points: number;
}

const game: Game = {
	GAME_SIZE: 6,
	user1: 'player1',
	user2: 'player2',
	player2: false,
	currentPlay: 'player1',
	player1Points: 0,
	player2Points: 0,
};

function callComputer() {
	const randomIndex = Math.floor(Math.random() * game.GAME_SIZE * game.GAME_SIZE);

	const cells = [...(elements['player1GridItems'] as HTMLSpanElement[])];

	const clickedCell = cells.at(randomIndex)!;

	handleBoardClick(clickedCell);
}

export { callComputer, game };
