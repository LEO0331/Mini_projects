const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
openBtn.addEventListener('click', () => {
    nav.forEach(el => el.classList.add('visible'))
})
closeBtn.addEventListener('click', () => {
    nav.forEach(el => el.classList.remove('visible'))
})