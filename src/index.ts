import { elements } from './elements.js';
import { board, initBoard } from './handlers/boardHandlers.js';
import { game } from './handlers/gameHandlers.js';

(() => {
	initBoard();
})();

console.log(elements['player1GridItems'] as HTMLSpanElement[]);

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
	} else if (clickedCellClasses.contains('item') && clickedCellClasses.length === 1) {
		clickedCellClasses.add('empty');
	}

	game.currentPlay = game.currentPlay === 'player1' ? 'player2' : 'player1';
}

(elements['player2Grid'] as HTMLDivElement).addEventListener('click', (e) =>
	handleBoardClick(e),
);

(elements['player1Grid'] as HTMLDivElement).addEventListener('click', (e) =>
	handleBoardClick(e),
);
