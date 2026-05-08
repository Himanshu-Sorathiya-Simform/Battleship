import type { User } from '../types.js';

interface Game {
	GAME_SIZE: number;
	user1: User;
	user2: User;
	player2: boolean;
	currentPlay: User;
}

const game: Game = {
	GAME_SIZE: 6,
	user1: 'player1',
	user2: 'player2',
	player2: true,
	currentPlay: 'player1',
};

export { game };
