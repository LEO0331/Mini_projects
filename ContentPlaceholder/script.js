const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 2000)//after 2 sec, show the content
function getData() {
    header.innerHTML = //fetch from API
        '<img src="https://images.unsplash.com/photo-1615390930096-953041dc219c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    profile_img.innerHTML =
        '<img src="https://images.unsplash.com/photo-1615739137453-bcadd839a913?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60" alt="" />'
    names.innerHTML = 'Flower Lover'
    date.innerHTML = 'May 11, 2021'
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))//stop the animation
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
