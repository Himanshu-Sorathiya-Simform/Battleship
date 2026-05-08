interface Elements {
	[key: string]: HTMLElement | HTMLElement[];
}

const elements: Elements = {
	gameArea: <HTMLDivElement>document.querySelector('.game-area')!,
	player1Grid: <HTMLDivElement>document.querySelector('.player1-grid')!,
	player2Grid: <HTMLDivElement>document.querySelector('.player2-grid')!,
	player1GridPositions: <HTMLSpanElement[]>[
		...document.querySelectorAll('.player1-grid .item'),
	],
	player2GridPositions: <HTMLSpanElement[]>[
		...document.querySelectorAll('.player2-grid .item'),
	],
	player1BlocksArea: <HTMLDivElement>document.querySelector('.player1-blocks')!,
	player2BlocksArea: <HTMLDivElement>document.querySelector('.player2-blocks')!,
};

export { elements };
