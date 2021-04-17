const contents = document.querySelectorAll('.content')//images
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, index) => {//item matches index
    item.addEventListener('click', () => {
        contents.forEach(content => content.classList.remove('show'))//hide all contents
        listItems.forEach(item => item.classList.remove('active'))//hide all items
        item.classList.add('active')//add active in current item
        contents[index].classList.add('show')//add show in current content
    })
})