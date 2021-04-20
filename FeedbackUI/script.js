const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')//button not in it
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
//const sendBtn = document.getElementById(send)
//const panel = document.getElementById(panel)
//event bubbling and propagation
let selectedRating = 'Satisfied'//origin state
ratingsContainer.addEventListener('click', event => {//event.target: what you click on
    if(event.target.parentNode.classList.contains('rating')) {//click on image: its parent <div class="rating">
        /*
        for(let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove('active')
        }
        */
        ratings.forEach(r => r.classList.remove('active'))//remove all active case
        event.target.parentNode.classList.add('active')//<div class="rating active">
        selectedRating = event.target.nextElementSibling.innerHTML//small>Unhappy/Neutral/Satisfied</small>
    }
})
//wilkl change panel so that can not use panel.addEventListener in the above func
sendBtn.addEventListener('click', event => {//replace the current panel content
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You for your review!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We will use your feedback to improve our customer support!</p>
    `
})