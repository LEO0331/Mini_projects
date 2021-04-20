const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const todos = JSON.parse(localStorage.getItem('todos'))//array
if(todos) {//show local storage
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', event => {//user input
    event.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    if(todo) {//already exist e.g. from local storage
        todoText = todo.text
    }
    if(todoText) {//new input or old one
        const todoEl = document.createElement('li')//<li>
        if(todo && todo.completed) {
            todoEl.classList.add('completed')//<li completed>
        }
        todoEl.innerText = todoText
        todoEl.addEventListener('click', () => {//left click, in the todo list
            todoEl.classList.toggle('completed')//display: line-through
            updateLS()
        }) 
        todoEl.addEventListener('contextmenu', event => {//right click
            event.preventDefault()
            todoEl.remove()//remove from the DOM
            updateLS()
        }) 
        todosUL.appendChild(todoEl)//<ui><li completed></li>
        input.value = ''//clear
        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')//<li>
    const todos = []
    todosEl.forEach(todoEl => {
        todos.push({//[{}]
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')//T/F
        })//e.g.[{"text":"todo one"."completed":"TRUE/FALSE"}]
    })//stringify objects to string
    localStorage.setItem('todos', JSON.stringify(todos))//key-value
}