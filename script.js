function randomColor() {
    return Math.random()*255;
}

const grid = document.querySelector('#grid');

// Create the grid
let row, cell;
for (let i = 0; i < 16; i++) {
    row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        cell =  document.createElement('div');
        // cell.innerText = i + j;
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

// Apply mouseover effects
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', function() {
    cell.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
}));
cells.forEach(cell => cell.addEventListener('mouseout', function() {
    setTimeout(function () {
        cell.style.backgroundColor = '';
    }, 2000);
}));