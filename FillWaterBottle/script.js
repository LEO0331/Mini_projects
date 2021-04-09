const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, index) => { //0~7
    cup.addEventListener('click', () => {
        highlightCups(index)
    })
})

function highlightCups(index) {//toggle the last small cup
    if (index === 7 && smallCups[index].classList.contains("full")) {
        index-- //handle last cup situation cuz no nextElementSibling
    } else if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index-- //deselect the current small cup
    }
    smallCups.forEach((cup, idx) => {
        if(idx <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length //number of full small cups
    const totalCups = smallCups.length

    if(fullCups === 0) {//hide percentage when empty
        percentage.style.visibility = 'hidden'//css: .percentage{visibility = 'hidden';}
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 300}px`//big cup heights
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    if(fullCups === totalCups) {//hide percentage when full
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
        //liters.innerText = `${2000 - (250 * fullCups)}ml`
    }
}
