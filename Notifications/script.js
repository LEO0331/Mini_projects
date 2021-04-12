const button = document.getElementById('button')
const toasts = document.querySelector('.toasts')
//random messages and types
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
]
const types = ['info', 'success', 'error']
button.addEventListener('click', () => createNotification())
//missing values are set to undefined
function createNotification(message, type) {//default: message = null, type = null
    const notif = document.createElement('div')//<div></div>
    notif.classList.add('toast')//<div class="toast"></div>
    //switch/if else to match message and type
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)
    setTimeout(() => {//disappear after ? ms
        notif.remove()
    }, 5000)
}
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]//0-messages.length
}
function getRandomType() {//link to css to show different color
    return types[Math.floor(Math.random() * types.length)]
}