const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
//const times = document.getElementById('times')
let clickTime = 0
let timesClicked = 0
//use single click to create double click effect
loveMe.addEventListener('click', event => {//dblclick
    if(clickTime === 0) {
        clickTime = new Date().getTime()//set new/current click time
    } else {
        if((new Date().getTime() - clickTime) < 700) {//? ms, the gap between two click to mimic double click effect
            createHeart(event)
            clickTime = 0//reset
        } else {
            clickTime = new Date().getTime()//set to current time
        }
    }
})

const createHeart = event => {//insert heart when clicking the image
    const heart = document.createElement('i')//<i>
    heart.classList.add('fas')//<i class="fas">
    heart.classList.add('fa-heart')//<i class="fas fa-heart">
    //current click position from entire viewport
    const x = event.clientX
    const y = event.clientY
    const leftOffset = event.target.offsetLeft//x
    const topOffset = event.target.offsetTop//y
    //inside the image, (1,1) is the top left, start of the corner
    const xInside = x - leftOffset
    const yInside = y - topOffset
    heart.style.top = `${yInside}px`//already set loveMe, fa-heart position absolute
    heart.style.left = `${xInside}px`
    loveMe.appendChild(heart)
    times.innerHTML = ++timesClicked//counter
    setTimeout(() => heart.remove(), 900)//remove each heart inserted in html
}
