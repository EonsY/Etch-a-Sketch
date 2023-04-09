// Grid Changing
const grid = document.getElementById("grid-container");
let divs = Array.from(document.querySelectorAll('.grid-item'));

divCreate = function() {
    let gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem);
}

function divRefresh() {
    divs = Array.from(document.querySelectorAll('.grid-item'));
}

function gridClear() {
    divRefresh();
    divs.forEach(div => div.remove());
}

function gridCreate(num) {
    gridClear();
    grid.style.setProperty('grid-template-columns', `repeat(${num}, auto)`);
    for (let i = 0; i < num**2; i++) {
        divCreate();
    };
    divs.forEach(div => div.addEventListener('click', pen));
};

let gridChangeVal = false;
function gridChangeFunc() {
    if (!gridChangeVal) {
        gridCreate(64);
        gridChangeVal = true;
    } else if (gridChangeVal) {
        gridCreate(16);
        gridChangeVal = false;
    }
}

gridCreate(16);

// Pen
grid.onmousedown = function() {
    divRefresh();
    divs.forEach(div => div.addEventListener('mouseover', pen));
}
grid.onmouseup = function() {
    divRefresh();
    divs.forEach(div => div.removeEventListener('mouseover', pen));
}

let colorVal = false
function coloring() {
    colorVal = true;
}

function erasing() {
    colorVal = false;
}

function pen(e) {
    if (colorVal) {
    e.target.classList.add('coloured');
    } else if (!colorVal) {
    e.target.classList.remove('coloured');
    };
}

// Clear
function clear() {
    divRefresh();
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('coloured')) {
            divs[i].classList.remove('coloured');
        }
    };
}

// Eventlisteners
const colorMode = document.querySelector('#color-mode');
const eraserMode = document.querySelector('#eraser-mode');
const gridChange = document.querySelector('#grid-change');
const clearAll = document.querySelector('#clear-all');

colorMode.addEventListener('click', coloring);
eraserMode.addEventListener('click', erasing);
gridChange.addEventListener('click', gridChangeFunc);
clearAll.addEventListener('click', clear);