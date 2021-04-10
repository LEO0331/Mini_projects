const right = document.getElementById('right')
const left = document.getElementById('left')
const body = document.body
const slides = document.querySelectorAll('.slide')
let activeSlide = 0

right.addEventListener('click', () => {
    activeSlide++
    if (activeSlide > slides.length - 1) {//last slide
        activeSlide = 0 //back to the first slide
    }
    setBgToBody()
    setActiveSlide()
})

left.addEventListener('click', () => {
    activeSlide--
    if (activeSlide < 0) {//fist slide
        activeSlide = slides.length - 1 //go to the last slide
    }
    setBgToBody()
    setActiveSlide()
})

setBgToBody() //initial first slide

function setBgToBody() { //select which slide to be the background image
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage 
}
  
function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active')) //remove all active slides
    slides[activeSlide].classList.add('active') //assign active to one slide
}