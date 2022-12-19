//declre global variable
let gridScreen = document.querySelector('.grid-container');
let slideText = document.querySelector('.square-value');
let slideValue = document.getElementById('slider');
let drawingToggle = document.getElementById('s1');


function createGrid() {
  for (let i = 0; i< 256; i+= 1) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('cell');
    createDiv.addEventListener('mouseover',function(e){e.target.style.backgroundColor = 'black';})
    gridScreen.appendChild(createDiv);
  }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function modifyGrid() {
  value = slideValue.value;
  slideText.innerHTML = `${value}*${value}`;
  removeAllChildNodes(gridScreen);
  gridScreen.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
  //console.log(drawingToggle.checked);
  if (drawingToggle.checked == true )
  {
  for (let i = 0; i< value*value; i+= 1) {
      let createDiv = document.createElement('div');
      createDiv.classList.add('cell');
      createDiv.addEventListener('mousedown',function(e){e.target.style.backgroundColor = 'black';})
      createDiv.addEventListener('mouseover',function(e){if (e.buttons === 1) e.target.style.backgroundColor = 'black';})
      gridScreen.appendChild(createDiv);
    }
  }
  if (drawingToggle.checked == false )
  {
  for (let i = 0; i< value*value; i+= 1) {
      let createDiv = document.createElement('div');
      createDiv.classList.add('cell');
      createDiv.addEventListener('mouseover',function(e){e.target.style.backgroundColor = 'black';})
      gridScreen.appendChild(createDiv);
    }
  }
  }


drawingToggle.addEventListener('change', function() {   
modifyGrid()    
});

slideValue.addEventListener('input', function() {
modifyGrid()
});

createGrid();
