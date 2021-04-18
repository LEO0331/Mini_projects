const codes = document.querySelectorAll('.code')
codes[0].focus()//auto put curser in the first box
codes.forEach((code, index) => {//auto focus on the next box
    code.addEventListener('keydown', event => {
        if(event.key >= 0 && event.key <=9) {//0~9
            codes[index].value = ''//clear out current value
            setTimeout(() => codes[index + 1].focus(), 5)//use set timeout to type in the first box
        } else if(event.key === 'Backspace') {//delete, move back
            setTimeout(() => codes[index - 1].focus(), 5)//hit another number to replace the current one
        }
    })
})