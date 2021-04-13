const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
async function getUser(username) {
    /* 
    axios(APIURL + username).then(res => res.data)
    const res = await axios(APIURL + username) --> res.data: data is a/an property/object inside the res object
    */
    try {//axios.get(url)
        const {data} = await axios(APIURL + username)//dont need to res=>res.json() in axios
        createUserCard(data)
        getRepos(username)
    } catch(error) {
        if(error.response.status === 404) {//==
            createErrorCard('No Profile with this Username')
        }
    }
}

async function getRepos(username) {
    try {//latest repos: add ?sort=created
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)
    } catch(error) {
        createErrorCard('Problem Fetching Repos')
    }
}

function createUserCard(user) {
    main.innerHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
    `
}

function createErrorCard(message) {
    main.innerHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `
}

function addReposToCard(repos) {//alreadys has <div id="repos"></div> after creating user cards
    const reposEl = document.getElementById('repos')
    repos
        .slice(0, 10)//show only ? repos
        .forEach(repo => {
            const repoEl = document.createElement('a')//link, <a href="#">
            repoEl.classList.add('repo')//<a class="repo">
            repoEl.href = repo.html_url//<a href="html_url" class="repo">
            repoEl.target = '_blank'//open in a new window
            repoEl.innerText = repo.name
            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', event => {//keydown
    event.preventDefault()//don't want submit to a file
    const user = search.value//event.target.value
    if(user) {//user input a valid username
        getUser(user)
        search.value = ''//clear search value
    }
})