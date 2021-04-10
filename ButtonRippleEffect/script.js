const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        //entire viewport
        const x = event.clientX
        const y = event.clientY
        //position of button itself
        const buttonLeft = event.target.offsetLeft
        const buttonTop = event.target.offsetTop
        //point to the relative position inside the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        const circle = document.createElement('span')//<span></span>
        circle.classList.add('circle')//<span class="circle"></span>
        circle.style.left = xInside + 'px'
        circle.style.top = yInside + 'px'
        //button.appendChild(circle) if use arrow function
        this.appendChild(circle)//this: cannot use by arrow function
        setTimeout(() => circle.remove(), 300)//remove the circle from the DOM
    })
})