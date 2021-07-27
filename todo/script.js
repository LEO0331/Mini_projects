const list = document.querySelector(".list")
const txt = document.querySelector(".txt")
const btn = document.querySelector(".btn")
let data = [
    //{"content": "todo1"}
]
function renderData(){
    let str = ''
    data.forEach((item, index) => {
	str += `<li>${item.content} <input type="button" value="delete" class="delete" data-num="${index}"></li>`
    })
    list.innerHTML = str
}
renderData() //initialization
btn.addEventListener("click", e => { //add
    if(txt.value == ''){
	alert("plz input items")
	return
    }
    let obj = {}
    obj.content = txt.value
    data.push(obj)
    renderData()
    txt.value = ''
})
list.addEventListener("click", e => { //delete
    if(e.target.getAttribute("class") != "delete"){
	alert("plz click the button")
	return
    }
    let num = e.target.getAttribute("data-num")
    data.splice(num,1) //let newData = data.splice(0,num).concat(data.splice(num+1))
    renderData()
})
