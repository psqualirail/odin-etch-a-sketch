function initializeGrid(gridSize) {
    // Remove grid if it exists
    const grid = document.querySelector('#grid');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // Create the grid
    let row, cell;
    for (let i = 0; i < gridSize; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            cell =  document.createElement('div');
            // cell.innerText = i + j;
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }

    setCellMouseoverEffects();
}

function randomColor() {
    return Math.random()*255;
}

function setCellMouseoverEffects() {
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
}

function setButtonClickEffect() {
    const buttonGridSize = document.querySelector('#button-grid-size');
    let gridSize = 0;
    buttonGridSize.addEventListener('click', function() {
        gridSize = prompt('What size of grid would you like?');
        if (gridSize <= 100) {
            initializeGrid(gridSize);
        } else {
            alert('Invalid grid size.  Choose a grid less than 100 wide.');
        }
    });
}

initializeGrid(16);
setButtonClickEffect();