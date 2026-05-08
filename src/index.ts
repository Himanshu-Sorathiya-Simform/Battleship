const gameArea = <HTMLDivElement>document.querySelector('.game-area')!;
const player1Grid = <HTMLDivElement>document.querySelector('.player1-grid')!;
const player2Grid = <HTMLDivElement>document.querySelector('.player2-grid')!;
const player1GridPositions = <HTMLSpanElement[]>[
	...document.querySelectorAll('.player1-grid .item'),
];
const player2GridPositions = <HTMLSpanElement[]>[
	...document.querySelectorAll('.player2-grid .item'),
];

console.log(gameArea);
console.log(player1Grid);
console.log(player1GridPositions);
console.log(player2Grid);
console.log(player2GridPositions);
