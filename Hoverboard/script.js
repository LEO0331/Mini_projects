const container = document.getElementById('container')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white']//array of color
const SQUARES = 400//? squares at the screen

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')//<div>
    square.classList.add('square')//<div class="square">
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 3px ${color}, 0 0 8px ${color}`
}

function removeColor(element) {
   element.style.background = '#252525'
   element.style.boxShadow = '0 0 3px black'
}

function getRandomColor() {//0~4
    return colors[Math.floor(Math.random() * colors.length)]//random index
}
