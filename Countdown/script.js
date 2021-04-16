const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
//const replay = document.getElementById('replay')
runAnimation()
function resetDOM() {//reset to initial state
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    nums.forEach(num => {
        num.classList.value = ''//clear value
    })
    nums[0].classList.add('in')//add in to the first number: <span class="in">3</span>
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1
        num.addEventListener('animationend', event => {
            if (event.animationName === 'goIn' && idx !== nextToLast) {//not the last index
                num.classList.remove('in')
                num.classList.add('out')
            } else if (event.animationName === 'goOut' && num.nextElementSibling) {//not 0
                num.nextElementSibling.classList.add('in')
            } else {//last number: 0
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})