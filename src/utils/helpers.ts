const cell = <HTMLSpanElement>document.querySelector('.item')!;

const cellSize = cell?.getBoundingClientRect().width;

function generateBlock(size = 2) {
	const block = document.createElement('div');

	const isVertical = Math.random() < 0.5 ? true : false;

	block.style.height = `${(cellSize && (isVertical ? cellSize * size : cellSize)) || 0}px`;
	block.style.width = `${(cellSize && (isVertical ? cellSize : cellSize * size)) || 0}px`;
	block.classList.add('block');

	return block;
}

function generateBlocks() {
	const block1 = generateBlock(3);
	const block2 = generateBlock(2);
	const block3 = generateBlock(2);

	return [block1, block2, block3];
}

export { generateBlocks };
