const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')
let idx = 0//initial index
let interval = setInterval(run, 2500)//auto keep running image through times

function run() {
    idx++//next image
    changeImage()
}

function changeImage() {//change the transform: translate value in css
    if(idx > img.length - 1) {//last image
        idx = 0
    } else if(idx < 0) {//first image
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 550}px)`//negative value
}

function resetInterval() {
    clearInterval(interval)//clear the current interval
    interval = setInterval(run, 2500)
}

rightBtn.addEventListener('click', () => {
    idx++//next image
    changeImage()
    resetInterval()//meed to reset the interval to break the original one to avoid conflict
})

leftBtn.addEventListener('click', () => {
    idx--//prev image
    changeImage()
    resetInterval()
})