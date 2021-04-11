const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
//two events
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)
/*
for(const empty of empties) { //array
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
*/
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})

function dragStart() {
    this.className += ' hold' //append class hold
    setTimeout(() => this.className = 'invisible', 0)//clear the box
    //setTimeout(() => this.className = 'invisible')
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    event.preventDefault()
    //this.append(hovered) result in not showing hovered effect
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
    //this.className += ' fill' not work cuz it will lead to duplicate pictures in each box
}