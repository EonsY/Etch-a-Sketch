// Grid Changing
const grid = document.getElementById("grid-container");
let divs = Array.from(document.querySelectorAll('.grid-item'));

divCreate = function() {
    let gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    gridItem.style.setProperty('background-color', 'white');
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
    divs.forEach(div => div.addEventListener('click', pen));
}

grid.onmouseup = function() {
    divRefresh();
    divs.forEach(div => div.removeEventListener('mouseover', pen));
}

// Coloring
let colorVal = false;
let randomColorVal = false;

let colorNum1 = 0;
let colorNum2 = 0;
let colorNum3 = 0;

function coloring() {
    colorNum1 = 0;
    colorNum2 = 0;
    colorNum3 = 0;
    randomColorVal = false;
    colorVal = true;
}

function erasing() {
    randomColorVal = false;
    colorVal = false;
}

function randomColorFunc() {
    randomColorVal = true;
    colorVal = true;
}

function randomColorGen() {
    colorNum1 = Math.floor(Math.random() * 256);
    colorNum2 = Math.floor(Math.random() * 256);
    colorNum3 = Math.floor(Math.random() * 256);
}

function pen(e) {
    if (colorVal && randomColorVal) {

    e.target.classList.add('colored');
    randomColorGen();
    this.style.setProperty('background-color', `rgba(${colorNum1}, ${colorNum2}, ${colorNum3}, 1)`);

    } else if (colorVal) {

    e.target.classList.add('colored');
    this.style.setProperty('background-color', `rgba(${colorNum1}, ${colorNum2}, ${colorNum3}, 1)`);

    } else if (!colorVal) {

    e.target.classList.remove('colored');
    this.style.setProperty('background-color', 'white');

    };
}

function clear() {
    divRefresh();
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('colored')) {
            divs[i].classList.remove('colored');
            divs[i].style.setProperty('background-color', 'white');
        };
    };
}

// Eventlisteners
const colorMode = document.querySelector('#color-mode');
const eraserMode = document.querySelector('#eraser-mode');
const randomMode = document.querySelector('#random-mode');
const gridChange = document.querySelector('#grid-change');
const clearAll = document.querySelector('#clear-all');

colorMode.addEventListener('click', coloring);
eraserMode.addEventListener('click', erasing);
randomMode.addEventListener('click', randomColorFunc);
gridChange.addEventListener('click', gridChangeFunc);
clearAll.addEventListener('click', clear);