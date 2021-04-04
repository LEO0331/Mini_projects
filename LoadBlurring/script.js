const bg = document.querySelector('.bg')
const txt = document.querySelector('.txt')

let load = 0
let interval = setInterval(blur, 40)
function blur() {//if use arrow function: error, can't instantiate const/let blur before blur
    load++
    if(load > 99){
        clearInterval(interval)
    }
    txt.innerText = `${load}%`
    txt.style.opacity = scale(load, 0, 100, 1, 0)//fade out; map a range of numbers to another range of numbers
    bg.style.filter = `blur(${scale(load, 0, 100, 25, 0)}px)`//change .bg{filter: blur(0px);}
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}