// Grid creation
const grid = document.getElementById("grid-container");

function gridCreate() {
    let gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem);
}

for (let i = 0; i < 16**2; i++) {
    gridCreate();
};

// Colouring
function colouring(e) {
    if (e.target.classList[1] == 'coloured') {
        e.target.classList.remove('coloured');
    } else {
        e.target.classList.add('coloured');
    };
}

function clearAll() {
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('coloured')) {
            divs[i].classList.remove('coloured');
        }
    }
}

const divs = Array.from(document.querySelectorAll('.grid-item'));
const button = document.querySelector('.clear-all');
divs.forEach(div => div.addEventListener('click', colouring));
button.addEventListener('click', clearAll);