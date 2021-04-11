const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEL = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')
const toggle = document.querySelector('.toggle')
//canvas API: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')//2d context
let size = 10//initial size
let isPressed = false
colorEl.value = 'black' //initial color
let color = colorEl.value
let x
let y

canvas.addEventListener('mousedown', event => {//click and hold down
    isPressed = true
    //mouse position
    x = event.offsetX
    y = event.offsetY
})

canvas.addEventListener('mouseup', event => {//release mouse
    isPressed = false
    /*null: an assignment value, can be assigned to a variable as a representation of no value
    undefined: a variable has been declared but has not yet been assigned a value
    null === undefined // false
    null == undefined // true
    null === null // true
    */
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', event => {
    if(isPressed) {
        const x2 = event.offsetX
        const y2 = event.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2//reposition
        y = y2//current position
    }
})
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2) //circle
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)//x1->x2, y1->y2
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color//border, line with stroke
    ctx.lineWidth = size * 2//same as radius of circle
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size//display the current size
}

increaseBtn.addEventListener('click', () => {
    size += 2
    if(size > 40) {//max size
        size = 40
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 2
    if(size < 5) {
        size = 5//min size
    }
    updateSizeOnScreen()
})
colorEl.addEventListener('change', event => color = event.target.value)
//clear the entire board
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

toggle.addEventListener('click', (event) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        event.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        event.target.innerHTML = 'Light Mode'
    }
})