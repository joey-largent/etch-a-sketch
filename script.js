//smallBrush button still changes size when selected
//when small grid overflows below (need dynamic resizing of inner grid itself)
//add sound effects to mouse hover
//add sound on/off button next to color

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

//RESET BUTTON
const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
resetBtn.textContent = "SIFIRLA";

//COLOR SWITCH
const colorLabel = document.createElement("h1");
colorLabel.textContent = "RENKLİ:";

const randomColorToggle = document.createElement("label");
randomColorToggle.classList.add("switch");

const toggleInput = document.createElement("input");
toggleInput.type = "checkbox";

const slider = document.createElement("span");
slider.classList.add("slider");

//APPEND THE CHILDREN
controlPanel.appendChild(brushLabel);
controlPanel.appendChild(largeBrush);
controlPanel.appendChild(medBrush);
controlPanel.appendChild(smallBrush);

controlPanel.appendChild(colorLabel);
randomColorToggle.appendChild(toggleInput);
randomColorToggle.appendChild(slider);
controlPanel.appendChild(randomColorToggle);

controlPanel.appendChild(resetBtn);


//CREATE GRID + DYNAMIC SIZING + HOVER
let gridSize = 16;
let isRandomColor = false;
let gridWidth = 500;

function createGrid() {
    if (grid) {
        grid.innerHTML = "";
    }

    let gridActualWidth = grid.offsetWidth;
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

//INITIATE
createGrid();

//GENERATE RANDOM COLOR
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//ACTIVE BRUSH
function setActiveBrush(button) {
    document.querySelectorAll(".brushButton").forEach((btn) => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}

//BRUSH SIZE CLICKS
function handleBrushClick(button, size) {
    setActiveBrush(button);
    gridSize = size;
    createGrid();
}

largeBrush.addEventListener("click", () => handleBrushClick(largeBrush, 16));
medBrush.addEventListener("click", () => handleBrushClick(medBrush, 30));
smallBrush.addEventListener("click", () => handleBrushClick(smallBrush, 50));

//RANDOM COLOR TOGGLE
toggleInput.addEventListener('change', () => {
    isRandomColor = toggleInput.checked;
    createGrid();
});

//RESET GRID
resetBtn.addEventListener('click', (event) => {
    isRandomColor = false;
    toggleInput.checked = false;
    createGrid();
});

//WINDOW RESIZE HANDLE
window.addEventListener("resize", createGrid);
