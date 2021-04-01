const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //nodeList

let current = 1
next.addEventListener('click', () => {
    current++
    if(current > circles.length){
        current = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    current--
    if(current < 1){
        current = 1
    }
    update()
})

const update = () => {
    circles.forEach((circle, index) => {
        if (current > index) { //next
            circle.classList.add('active')
        } else { //prev
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if (current === 1) {
        prev.disabled = true
    } else if (current === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}