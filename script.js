const body = document.querySelector("body");

const grid = document.createElement("div");
grid.classList.add("masterGrid");
body.appendChild(grid);

//BRUSHES

const largeBrush = document.createElement("button");
grid.classList.add("largeBrush");
body.appendChild(largeBrush);

const medBrush = document.createElement("button");
grid.classList.add("medBrush");
body.appendChild(medBrush);

const smallBrush = document.createElement("button");
grid.classList.add("smallBrush");
body.appendChild(smallBrush);

//RESET BUTTON
const resetBtn = document.createElement("button");
grid.classList.add("resetBtn");
resetBtn.textContent = "RESET";
body.appendChild(resetBtn);


//CREATE GRID + DYNAMIC SIZING + HOVER
let gridSize = 16;
let gridWidth = 300;

function createGrid() {
    grid.innerHTML = ""
    let cellSize = gridWidth / gridSize;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let divs = document.createElement("div");
        divs.classList.add("divCell");
        divs.style.width = `${cellSize}px`;
        divs.style.height = `${cellSize}px`;
        grid.appendChild(divs);
    };

    divs.addEventListener('mouseover', () => {
        divs.style.backgroundColor = 'black';
    });
};

//RESIZE GRID
largeBrush.addEventListener('click', (event) => {
    gridSize = 16;
    createGrid();
});

medBrush.addEventListener('click', (event) => {
    gridSize = 50;
    createGrid();
});

smallBrush.addEventListener('click', (event) => {
    gridSize = 100;
    createGrid();
});

//RESET GRID
resetBtn.addEventListener('click', (event) => {
    createGrid();
});
