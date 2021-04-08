const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const btn = document.getElementById('btn')

textarea.focus() //auto focus when enter page

textarea.addEventListener('keyup', event => {
    createTags(event.target.value) //things users type in; equal to textarea.value
    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '' //clear input value
        }, 100)
        randomSelect()
    }
})

btn.addEventListener('click', () => {
    createTags(textarea.value)
    setTimeout(() => {
        textarea.value = '' //clear input value
    }, 100)
    randomSelect()
})

function createTags(input) { //if not empty space, return tag.trim()
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = '' //clear, if no this line, will display all type in words 
    tags.forEach(tag => {
        const tagEl = document.createElement('span') //<span></span>
        tagEl.classList.add('tag') //<span class="tag"></span>
        tagEl.innerText = tag //<span class="tag">Choice 1</span>
        tagsEl.appendChild(tagEl) //<div id="tags"><span class="tag">Choice 1</span></div>
    })
}

function randomSelect() {
    const times = 20 //fix number or random: Math.floor(Math.random() * 50)
    const interval = setInterval(() => { //during selection, highlighting
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 150)
    }, 150);
    setTimeout(() => {
        clearInterval(interval)//stop
        setTimeout(() => {//pick random tag to stop on
            highlightTag(pickRandomTag())
        }, 150)
    }, times * 150)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')//<span class="tag"></span>
    return tags[Math.floor(Math.random() * tags.length)]//return a random integer between tags.length/array length, not include tags.length number
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}