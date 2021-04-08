const faq_toggle = document.querySelectorAll('.faq-toggle')

faq_toggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active') //<div class="faq active">
    })
})