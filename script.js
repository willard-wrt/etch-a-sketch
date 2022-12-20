//declre global variable
const DEFAULT_MODE = 'pencil'
let currentMode = DEFAULT_MODE
let gridScreen = document.querySelector('.grid-container');
let slideText = document.querySelector('.square-value');
let slideValue = document.getElementById('slider');
let drawingToggle = document.getElementById('s1');
let resetBtn = document.querySelector('.reset-btn');
let eraserBtn = document.querySelector('.eraser-btn');
let rgbBtn = document.querySelector('.rgb-btn');
let pencilBtn = document.querySelector('.pencil-btn');
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
eraserBtn.onclick = () => setCurrentMode('eraser')
rgbBtn.onclick = () => setCurrentMode('rgb')
pencilBtn.onclick = () => setCurrentMode('pencil')

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function activateButton(newMode) {
  if (currentMode ==='rgb') {
    rgbBtn.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
  } else if (currentMode === 'pencil') {
    pencilBtn.classList.remove('active')
  }

  if (newMode === 'rgb') {
    rgbBtn.classList.add('active')
  } else if (newMode === 'eraser') {  
    eraserBtn.classList.add('active')
  } else if (newMode === 'pencil') {  
    pencilBtn.classList.add('active')
}
}

function createGrid() {
  for (let i = 0; i< 256; i+= 1) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('cell');
    createDiv.addEventListener('mouseover',changeColor);
    gridScreen.appendChild(createDiv);
  }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


function drawColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return  
  else {
  changeColor(e);}
}

function changeColor(e) {
  //if (e.type === 'mouseover' && !mouseDown) return 
  if (currentMode === 'eraser') { 
  e.target.style.backgroundColor = 'white';
  console.log(currentMode)
  }  else if (currentMode === 'rgb') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`  
  }  else if (currentMode === 'pencil') {
    e.target.style.backgroundColor = 'black';
  }
}

function modifyGrid() {
  value = slideValue.value;
  slideText.innerHTML = `${value}*${value}`;
  removeAllChildNodes(gridScreen);
  gridScreen.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
  //console.log(drawingToggle.checked);
  console.log(currentMode);
  for (let i = 0; i< value*value; i+= 1) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('cell');
  if (drawingToggle.checked == true )
  {
      createDiv.addEventListener('mouseover',drawColor)
      createDiv.addEventListener('mousedown',drawColor)
      gridScreen.appendChild(createDiv);
    }
  else if (drawingToggle.checked == false ) {
      createDiv.addEventListener('mouseover',changeColor)
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

resetBtn.addEventListener('click', function(){
modifyGrid()  
});

createGrid();
