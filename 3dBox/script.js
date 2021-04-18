const btn = document.getElementById('btn')
const boxesContainer = document.getElementById('boxes')
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))//add/remove class="big"
function createBoxes() {
    for (let i = 0; i < 4; i++) {//4 rows
        for (let j = 0; j < 4; j++) {//4 column
            const box = document.createElement('div')//<div>
            box.classList.add('box')//<div class="box">
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`//style="background-position"
            boxesContainer.appendChild(box)
        }
    }
}
createBoxes()