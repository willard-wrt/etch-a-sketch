//declre global variable
let gridScreen = document.querySelector('.grid-container');

function createGrid() {
  for (let i = 0; i< 256; i+= 1) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('cell');
    createDiv.addEventListener('mouseover',function(e){e.target.style.backgroundColor = 'black';})
    gridScreen.appendChild(createDiv);
  }
}

createGrid();