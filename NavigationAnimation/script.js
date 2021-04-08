const nav = document.getElementById('nav')
const toggle = document.getElementById('toggle')
//const icon = document.querySelector('.icon')
toggle.addEventListener('click', () => {//icon
    nav.classList.toggle('active') //add/remove active class in <nav id="nav"></nav>
})