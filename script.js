const body = document.querySelector("body");

const grid = document.createElement("div");
grid.classList.add("masterGrid");
body.appendChild(grid);


for (let i = 0; i < 257; i++) {
    let divs = document.createElement("div");
    divs.classList.add("divCell");
    grid.appendChild(divs);
};

