//border selector on colors does not work
//occassional errors where changing size does not delete grid continue
//when making the screen small, the control panel remains on the left and the grid has zero right padding; I want the control panel to pop to the top of the screen and the box to lock at its current size and not get any smaller.


const body = document.querySelector("body");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
body.appendChild(wrapper);

const controlPanel = document.createElement("div");
controlPanel.classList.add("controlPanel");
wrapper.appendChild(controlPanel);

const grid = document.createElement("div");
grid.classList.add("masterGrid");
wrapper.appendChild(grid);

//BRUSHES
const brushLabel = document.createElement("h1");
brushLabel.classList.add("brushLabel");
brushLabel.textContent = "BOYUT:";

const largeBrush = document.createElement("button");
largeBrush.classList.add("largeBrush");
largeBrush.classList.add("brushButton");

const medBrush = document.createElement("button");
medBrush.classList.add("medBrush");
medBrush.classList.add("brushButton");

const smallBrush = document.createElement("button");
smallBrush.classList.add("smallBrush");
smallBrush.classList.add("brushButton");

controlPanel.appendChild(brushLabel);
controlPanel.appendChild(largeBrush);
controlPanel.appendChild(medBrush);
controlPanel.appendChild(smallBrush);

//CREATE GRID + DYNAMIC SIZING + HOVER
let gridSize = 16;
let gridWidth = 500;

function createGrid() {
    grid.innerHTML = "";
    let cellSize = gridWidth / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement("div");
        div.classList.add("divCell");
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = isRandomColor ? getRandomColor() : '#8b7617';
        });

        grid.appendChild(div);
    }
};

createGrid();

//RANDOM COLOR TOGGLE
const colorLabel = document.createElement("h1");
colorLabel.textContent = "RENKLİ:";

const randomColorToggle = document.createElement("label");
randomColorToggle.classList.add("switch");

const toggleInput = document.createElement("input");
toggleInput.type = "checkbox";


const slider = document.createElement("span");
slider.classList.add("slider");

controlPanel.appendChild(colorLabel);
randomColorToggle.appendChild(toggleInput);
randomColorToggle.appendChild(slider);
controlPanel.appendChild(randomColorToggle);

let isRandomColor = false;

toggleInput.addEventListener('change', () => {
    isRandomColor = toggleInput.checked;
    createGrid();
});

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//RESET BUTTON
const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
resetBtn.textContent = "SIFIRLA";
controlPanel.appendChild(resetBtn);

//ACTIVE BRUSH
function setActiveBrush(button) {
    document.querySelectorAll(".brushButton").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
}

//RESIZE GRID
largeBrush.addEventListener('click', (event) => {
    gridSize = 16;
    createGrid();
    setActiveBrush(largeBrush);
});

medBrush.addEventListener('click', (event) => {
    gridSize = 30;
    createGrid();
    setActiveBrush(medBrush)
});

smallBrush.addEventListener('click', (event) => {
    gridSize = 50;
    createGrid();
    setActiveBrush(smallBrush)
});

function setActiveBrush(button) {
    document.querySelectorAll('.brushButton').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

//RESET GRID
resetBtn.addEventListener('click', (event) => {
    isRandomColor = false;
    toggleInput.checked = false;
    createGrid();
});
