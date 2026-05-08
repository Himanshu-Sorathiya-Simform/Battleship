import { elements } from './elements.js';
import { assignTurn, initBoard } from './handlers/boardHandlers.js';
import { game } from './handlers/gameHandlers.js';

let player1Points = 0;
let player2Points = 0;

(() => {
	initBoard();

	assignTurn();
})();

function handleBoardClick(e: PointerEvent) {
	const target = e.target as HTMLElement;

	const clickedGrid = <HTMLDivElement>target.closest('.player-grid');
	const clickedCell = <HTMLSpanElement>target.closest('.item');

	const { currentPlay } = game;

	if (!clickedCell || clickedGrid.classList[1]?.startsWith(currentPlay)) return;

	const clickedCellClasses = clickedCell.classList;

	if (clickedCellClasses.contains('broken') || clickedCellClasses.contains('empty'))
		return;

	if (clickedCellClasses.contains('block')) {
		clickedCellClasses.add('broken');

		game.currentPlay === 'player1' ? player1Points++ : player2Points++;

		if (player1Points === 7 || player2Points === 7) {
			(elements['winnerScreen'] as HTMLParagraphElement).textContent =
				`${game.currentPlay} Won`;
		}
	} else if (clickedCellClasses.contains('item') && clickedCellClasses.length === 2) {
		clickedCellClasses.add('empty');

		game.currentPlay = game.currentPlay === 'player1' ? 'player2' : 'player1';
	}

	assignTurn();
}

(elements['player2Grid'] as HTMLDivElement).addEventListener('click', (e) =>
	handleBoardClick(e),
);

(elements['player1Grid'] as HTMLDivElement).addEventListener('click', (e) =>
	handleBoardClick(e),
);
