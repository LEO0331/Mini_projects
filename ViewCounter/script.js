const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'
    const updateCount = () => {
        const target = Number(counter.getAttribute('data-target')) //+, parse int
        const a = +counter.innerText
        const i = target/100 //how many numbers increment at once, all counter will finish at same time
        if (a < target) {//keep updating const a
            counter.innerText = `${Math.ceil(a + i)}`
            setTimeout(updateCount, 10) //counting animation, unless display only i
        } else {
            counter.innerText = target
        }
        /*
        if (a < target) {//keep updating const a
            counter.innerText = `${Math.ceil(a + i)}`
            setTimeout(updateCount, 1.5) //counting animation, unless display only i
        }
        */
    }
    updateCount()
})