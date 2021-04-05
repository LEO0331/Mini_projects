const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', showBoxes)

showBoxes() //show the box first

function showBoxes() { 
    const triggerpoint = window.innerHeight * 0.9
    boxes.forEach(box => {
        //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        const topbox = box.getBoundingClientRect().top
        if (topbox <= triggerpoint) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
    })
}
