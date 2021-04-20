const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'//decide ? x ? px images
const rows = 5//? rows
for(let i = 0; i < rows * 3; i++) {//? images per row
    const img = document.createElement('img')//<img>
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)//<div class="container"><img="https://source.unsplash.com/random/300x300"></div>
}
function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`//300-310x300-310
}
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300//300-310
}
