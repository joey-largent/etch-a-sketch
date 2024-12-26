//add border for when a certain brush size is selected
//place all buttons in a panel to the left
//style color selector
//make grid responsive


const body = document.querySelector("body");

const grid = document.createElement("div");
grid.classList.add("masterGrid");
body.appendChild(grid);

const controlPanel = document.createElement("div");
controlPanel.classList.add("controlPanel");
body.insertBefore(controlPanel, grid);

//BRUSHES
const brushLabel = document.createElement("h1");
brushLabel.classList.add("brushLabel");
brushLabel.textContent = "BOYUT:";

const largeBrush = document.createElement("button");
largeBrush.classList.add("largeBrush");

const medBrush = document.createElement("button");
medBrush.classList.add("medBrush");

const smallBrush = document.createElement("button");
smallBrush.classList.add("smallBrush");

controlPanel.appendChild(brushLabel);
controlPanel.appendChild(largeBrush);
controlPanel.appendChild(medBrush);
controlPanel.appendChild(smallBrush);

//CREATE GRID + DYNAMIC SIZING + HOVER
let gridSize = 16;
let gridWidth = 500;

function createGrid() {
    grid.innerHTML = ""
    let cellSize = gridWidth / gridSize;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let divs = document.createElement("div");
        divs.classList.add("divCell");
        divs.style.width = `${cellSize}px`;
        divs.style.height = `${cellSize}px`;

        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = isRandomColor ? getRandomColor() : '#8b7617';
        });

        grid.appendChild(divs);
    };

    
};

createGrid();

//RANDOM COLOR TOGGLE
const randomColorToggle = document.createElement("input");
randomColorToggle.type = "checkbox";
randomColorToggle.id = "randomColorToggle";
controlPanel.appendChild(randomColorToggle);

let isRandomColor = false;

randomColorToggle.addEventListener('change', () => {
    createGrid();
    isRandomColor = randomColorToggle.checked;
});

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//RESET BUTTON
const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
resetBtn.textContent = "SIFIRLA";
controlPanel.appendChild(resetBtn);

//RESIZE GRID
largeBrush.addEventListener('click', (event) => {
    gridSize = 16;
    createGrid();
});

medBrush.addEventListener('click', (event) => {
    gridSize = 30;
    createGrid();
});

smallBrush.addEventListener('click', (event) => {
    gridSize = 50;
    createGrid();
});

//RESET GRID
resetBtn.addEventListener('click', (event) => {
    createGrid();
});
