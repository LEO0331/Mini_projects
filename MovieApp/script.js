//API Key
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const btn = document.querySelector('.btn')
//initial movies from api
getMovies(API_URL)
async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data.results) //results array
}

function showMovies(movies) {
    main.innerHTML = '' //clear the main tag, replace movie when search
    movies.forEach((movie) => { //<main id="main">movie divs, empty at first</main>
        const {title, poster_path, vote_average, overview} = movie//destructure
        const movieEl = document.createElement('div')//<div></div>
        movieEl.classList.add('movie')//<div class="movie"></div>
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {//.movie-info span.green/orange/red
    if(vote >= 8) {
        return 'green' //string, mention in css
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
//The submit event fires when the user clicks a submit button (<button> or <input type="submit">) or presses Enter while editing a field (e.g. <input type="text">) in a form
form.addEventListener('submit', event => {//only work on <form>
    event.preventDefault() //not actual submit to the page
    //https://github.com/LEO0331/Mini_projects/blob/main/Random_Choice_Pick/script.js
    const searchTerm = search.value //user type in, can not use event.target.value
    if(searchTerm && searchTerm !== '') {//no empty search term
        getMovies(SEARCH_API + searchTerm)//specific movie name
        search.value = '' //clear the search term
    } else {
        window.location.reload()//reload the page if nothing
    }
})
/*
btn.addEventListener('click', event => {
    event.preventDefault() //not actual submit to the page
    const searchTerm = search.value //user type in
    if(searchTerm && searchTerm !== '') {//no empty search term
        getMovies(SEARCH_API + searchTerm)//specific movie name
        search.value = '' //clear the search term
    } else {
        window.location.reload()//reload the page
    }
})
*/