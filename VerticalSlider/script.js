const sliderContainer = document.querySelector('.slider-container')
const slideLeft = document.querySelector('.left-slide')
const slideRight = document.querySelector('.right-slide')//background image
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length
let activeSlideIndex = 0 //current slide
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`//negative: go up, matching
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
const changeSlide = direction => {
    const sliderHeight = sliderContainer.clientHeight//display slider height dynamic
    if(direction === 'up') {
        activeSlideIndex++//next slide
        if(activeSlideIndex > slidesLength - 1) {//last slide
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {//past the first slide
            activeSlideIndex = slidesLength - 1//last one
        }
    }
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`//go down
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`//go up
}