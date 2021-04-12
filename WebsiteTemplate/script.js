const nav = document.querySelector('.nav')
//const li = document.querySelectorAll('li')
const a = document.querySelectorAll('a')
window.addEventListener('scroll', fixNav)//scroll and turn into active nav bar
function fixNav() {//vertical
    if(window.scrollY > nav.offsetHeight + 180) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
a.forEach(l => {
    l.addEventListener('click', () => {
        //removeactive();
        a.forEach(i => {
            i.classList.remove('current')
        })
        l.classList.add('current')
    })
})
/*
function removeactive(){
    a.forEach(i => {
        i.classList.remove('current')
    })
}
*/