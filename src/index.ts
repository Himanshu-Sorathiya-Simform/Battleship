import { elements } from './elements.js';
import { assignTurn, initBoard } from './handlers/boardHandlers.js';
import { callComputer, game } from './handlers/gameHandlers.js';

(() => {
	initBoard();

	assignTurn();
})();

function handleBoardClick(clickedCell: HTMLSpanElement) {
	const clickedCellClasses = clickedCell.classList;

	if (clickedCellClasses.contains('broken') || clickedCellClasses.contains('empty')) {
		if (!game.player2 && game.currentPlay === 'player2') {
			callComputer();
		}

		return;
	}

	if (clickedCellClasses.contains('block')) {
		clickedCellClasses.add('broken');

		game.currentPlay === 'player1' ? game.player1Points++ : game.player2Points++;

		if (game.player1Points === 7 || game.player2Points === 7) {
			(elements['winnerScreen'] as HTMLParagraphElement).textContent =
				`${game.currentPlay} Won`;
		}

		if (!game.player2 && game.currentPlay === 'player2') {
			setTimeout(callComputer, 1000);
		}
	} else if (clickedCellClasses.contains('item') && clickedCellClasses.length === 2) {
		clickedCellClasses.add('empty');

		if (!game.player2 && game.currentPlay === 'player1') {
			setTimeout(callComputer, 1500);
		}

		game.currentPlay = game.currentPlay === 'player1' ? 'player2' : 'player1';
	}

	assignTurn();
}

(elements['player2Grid'] as HTMLDivElement).addEventListener('click', (e) => {
	const target = e.target as HTMLElement;

	const clickedGrid = <HTMLDivElement>target.closest('.player-grid');
	const clickedCell = <HTMLSpanElement>target.closest('.item');

	const { currentPlay } = game;

	if (!clickedCell || clickedGrid.classList[1]?.startsWith(currentPlay)) return;

	handleBoardClick(clickedCell);
});

if (game.player2) {
	(elements['player1Grid'] as HTMLDivElement).addEventListener('click', (e) => {
		const target = e.target as HTMLElement;

		const clickedGrid = <HTMLDivElement>target.closest('.player-grid');
		const clickedCell = <HTMLSpanElement>target.closest('.item');

		const { currentPlay } = game;

		if (!clickedCell || clickedGrid.classList[1]?.startsWith(currentPlay)) return;

		handleBoardClick(clickedCell);
	});
}

export { handleBoardClick };
