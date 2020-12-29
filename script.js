
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');
const customColorRadio = document.querySelector('#customColor');
const randomColorRadio = document.querySelector('#randomColor');            //various querySelectors for HTML elements
const shadesRadio = document.querySelector('#shades');
const eraserRadio = document.querySelector('#eraser');

function createGrid(x, y) {
    for (i = 0; i < (x * y); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        container.appendChild(gridDiv);
        
    }
    container.style.cssText = `grid-template-rows: repeat(${x}, ${100/x}%)`;           //function to create a grid of divs using CSS grid
    container.style.cssText = `grid-template-columns: repeat(${y}, ${100/x}%)`;        //event listeners make each div turn black on mouseover

    const gridDivs = document.querySelectorAll('.gridDiv');
    
    
    gridDivs.forEach((gridDiv) => {
        
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.cssText = 'background-color: black';
        });
    });
    
}

createGrid(16,16); //creates default grid

clearButton.addEventListener("click", function(){     
    const gridDiv = document.querySelector(".gridDiv");
    const gridDivs = document.querySelectorAll('.gridDiv');       
    
    gridDivs.forEach((gridDiv) => {
        container.removeChild(gridDiv);
    });

    let gridSize = prompt("Please enter grid size.")                             //reset button - deletes previous grid and prompts user for a new grid size
    if (gridSize > 100) {                                                        //uses createGrid function to create the custom grid
        gridSize = prompt("Please enter a size between 1 and 100");

    }
    createGrid(gridSize, gridSize);
    gridDivs.forEach((gridDiv) => {
        gridDiv.style.cssText = "background-color: white";
        
    });
    
});

customColorRadio.addEventListener("click", function(){
    const gridDiv = document.querySelector(".gridDiv");                           //radio for custom colors with color picker
    const gridDivs = document.querySelectorAll('.gridDiv');
    

    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseover', () => {
            let colorValue = document.getElementById("colorPicker").value;
            gridDiv.style.cssText = `background-color: ${colorValue}`;
        });
    });
});

randomColorRadio.addEventListener("click", function(){
    const gridDiv = document.querySelector(".gridDiv");                          //radio for random colors
    const gridDivs = document.querySelectorAll('.gridDiv');

    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseover', () => {
            let randomColor1 = Math.floor(Math.random() * 256);
            let randomColor2 = Math.floor(Math.random() * 256);
            let randomColor3 = Math.floor(Math.random() * 256);
            gridDiv.style.cssText = `background-color: rgb(${randomColor1},${randomColor2},${randomColor3})`;
        });
    });
});

shadesRadio.addEventListener("click", function(){
    let shade = 255;
    let shadeChangeRate = 0.01;                                                 //radio for incremental shades from white to black
    const gridDiv = document.querySelector(".gridDiv");
    const gridDivs = document.querySelectorAll('.gridDiv');


    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseover', () => {
            shade = Math.floor(shade - (shade * shadeChangeRate));
            gridDiv.style.cssText = `background-color: rgb(${shade},${shade},${shade})`;
              
        });
    });
});

eraserRadio.addEventListener("click", function(){                               //radio for eraser (sets the tiles to white)
    const gridDiv = document.querySelector(".gridDiv");
    const gridDivs = document.querySelectorAll('.gridDiv');


    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.cssText = `background-color: white`;
             
        });
    });
});


