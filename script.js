
const container = document.querySelector('#container');



function createGrid(x, y) {
    for (i = 0; i < (x * y); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        container.appendChild(gridDiv);
        
    }
    container.style.cssText = `grid-template-rows: repeat(${x}, ${100/x}%)`;
    container.style.cssText = `grid-template-columns: repeat(${y}, ${100/x}%)`;

    const gridDivs = document.querySelectorAll('.gridDiv');

    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.cssText = 'background-color: black';
        });
    });
    
}

createGrid(16, 16);


