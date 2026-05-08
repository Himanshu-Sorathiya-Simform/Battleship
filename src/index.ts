import { elements } from './elements.js';
import { assignTurn, initBoard } from './handlers/boardHandlers.js';
import { game } from './handlers/gameHandlers.js';

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
