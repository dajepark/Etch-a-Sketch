let container = document.querySelector('div');
let gridDimensions = 16;

//Function to create grid//

function createGrid(gridDimensions) {
  for(let i = 0; i < gridDimensions * gridDimensions; i++) {
    let gridBox = document.createElement('div')
    gridBox.className = 'gridBox';
  	container.appendChild(gridBox);
	}
	container.style.gridTemplateColumns = `repeat(${gridDimensions},1fr)`
	container.style.gridTemplateRows = `repeat(${gridDimensions},1fr)`
}

createGrid(gridDimensions);

//Function to draw//

function drawGrid() {
	let gridCells = document.querySelectorAll('.gridBox');
	gridCells.forEach(gridCell => {
		gridCell.addEventListener('mouseover', function(e){
			e.target.className = 'drawn';
		});
	});
}

drawGrid();

//Reset grid//

let btn = document.querySelector('.resetButton');
btn.addEventListener('click',resetGrid);

function resetGrid() {
	container.innerHTML = '';
	let gridDimensions = window.prompt('Grid dimensions?');
	createGrid(gridDimensions);
	drawGrid();
}







// let btn = document.querySelector('.resetButton');
// btn.addEventListener('click',resetGrid);

// function resetGrid() {
// 	$(document).ready(function() {
// 		let grid = document.querySelectorAll('.drawn');	
// 		$(grid).remove();
// 	});
// 	gridDimensions;
// 	createGrid(gridDimensions);

// }

// function resetGrid() {
// 	let btn = document.querySelector('.resetButton');
// 	let gridCells = document.querySelectorAll('.gridBox');
// 	btn.addEventListener('click',reset() {
// 		gridCells,forEach(gridCell => {
// 			gridCell.className = 'gridBox'
// 		};
// 	};
// }
