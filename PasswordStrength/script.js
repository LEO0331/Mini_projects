const password = document.getElementById('password')
const background = document.getElementById('background')
const symbols = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','<','>','/',',','.']
password.addEventListener('input', event => {
    const input = event.target.value//password.value
    const length = input.length
    let f1 = 0
    symbols.forEach( a => {//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
        if(input.includes(a)){
            f1++
        }
    })
    const factor = 20 - (length+f1) * 2
    background.style.filter = `blur(${factor}px)`
})