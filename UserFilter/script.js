const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
getData()
filter.addEventListener('input', event => filterData(event.target.value))
async function getData() {
    const response = await fetch('https://randomuser.me/api?results=50')//50 people
    const { results } = await response.json()
    result.innerHTML = ''//clear result, not show loading
    results.forEach(user => {
        const li = document.createElement('li')//<li>
        listItems.push(li)//push li in the array
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `//large picture size
        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}