const screens = document.querySelectorAll('.screen');//3 screens separated by screen-up
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}
//switch the screen
start_btn.addEventListener('click', () => screens[0].classList.add('up'))//<div class="screen up">

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {//<button class="choose-insect-btn"><p><img>
        const img = btn.querySelector('img')//choose tag
        const src = img.getAttribute('src')//e.g. <img src="" alt="fly"/>
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)//create an insect and put it in random spot
        setInterval(increaseTime, 1000)//start game
    })
})

function increaseTime() {//keep the game happening
    let m = Math.floor(seconds / 60)//minutes
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m//e.g. 01
    s = s < 10 ? `0${s}` : s//e.g. 01:01
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {//insert in the DOM
    const insect = document.createElement('div')//<div>
    insect.classList.add('insect')//<div class="insect">
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`//random rotate
    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)//<div class="screen game-container" id="game-container"> <div class="insect">
}

function getRandomLocation() {//put inside the window and not in the edge
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x, y}
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')//<div class="insect caught">: scale down
    setTimeout(() => this.remove(), 2000)//remove it from the DOM
    setTimeout(createInsect, 1000)//add insects
    setTimeout(createInsect, 1500)//click one show two more: infinite
}

function increaseScore() {
    score++
    if(score > 15) {//ignore message
        message.classList.add('visible')//<h5 class="visible" id="message" class="message">Annnoyed? <br> Leave it LOL!</h5>
    }
    scoreEl.innerHTML = `Score: ${score}`
}
