const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    container.classList.toggle('active')//reclick, hide search placeholder
    input.focus()//give focus to an element
})