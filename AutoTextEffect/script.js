const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Hi Programmer! it\'s a nice day'
let index = 1
let speed = 400 / speedEl.value//original value = 1
writeText()
function writeText() {
    textEl.innerText = text.slice(0, index)//get one char at a time
    index++
    if(index > text.length) {//last char
        index = 1//reset, start over
    }
    setTimeout(writeText, speed)
}
//type any number or use arrow keys to control speed
speedEl.addEventListener('input', event => speed = 400 / event.target.value)
//speedEl.addEventListener('input', () => speed = 400 / speedEl.value)