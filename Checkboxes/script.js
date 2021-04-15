const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
/*
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
*/
toggles.forEach(toggle => toggle.addEventListener('change', event => doTrick(event.target)))
//use 'change' to the checkbox
function doTrick(theClickedOne) {//can't toggle all three button, unchecked one auto
    if(good.checked && cheap.checked && fast.checked) {//all checked
        if(good === theClickedOne) {//theClickedOne equal to the last clicked box
            fast.checked = false//unchecked
        }
        if(cheap === theClickedOne) {
            good.checked = false
        }
        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}
