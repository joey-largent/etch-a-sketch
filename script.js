const body = document.querySelector("body");

const grid = document.createElement("div");
grid.classList.add("masterGrid");
body.appendChild(grid);

//CREATE GRID + DYNAMIC SIZING
let gridSize = 16
let gridWidth = 300; // Width of .masterGrid
let cellSize = gridWidth / gridSize;

for (let i = 0; i < (gridSize * gridSize); i++) {
    let divs = document.createElement("div");
    divs.classList.add("divCell");
    divs.style.width = `${cellSize}px`;
    divs.style.height = `${cellSize}px`;
    grid.appendChild(divs);
};