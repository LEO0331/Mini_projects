var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//var uls = document.getElementsByTagName("ul"); HTMLCollection(1)
//https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/28406/
var items = document.getElementsByTagName("li"); //HTMLCollection(6)
var item = document.querySelectorAll("li"); //NodeList

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));//li.innerHTML = input.value
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));//btn.innerHTML = "delete";
	li.appendChild(btn);
	btn.onclick = removeItems;//btn.addEventListener("click", removeItems);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListAfterClick(event) {
	event.target.classList.toggle("done");//target: return the element triggering the event; here means "click"
	//this.classList.toggle("done"); CANT use
}

function deleteButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	item[i].appendChild(btn);//SAME as items
	btn.onclick = removeItems;//avoid toggle functions
}

function removeItems(e){
	e.target.parentNode.remove();//cancel lists("li") SAME as this.parentNode.remove(); 
}

for(var i=0;i<item.length;i++){
	deleteButton();
}

// Callbacks: asynchronous functions, where one function has to wait for another function (e.g. waiting for a file to load)
// this action happen when a click happens; gets added the () every time the click happens
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleListAfterClick);

/*
ul.onclick = function(event){ //when the user clicks on an element 當使用者按下click按鈕時
	event.target.classList.toggle("done");
}

if already add <button> elenment in html
function addbutton(){
	var btn = document.querySelectorAll('li button');//all buttons in li = ul; NodeList
	for(var i=0;i<btn.length;i++){
	btn[i].addEventListener("click",removeItems);
	}
}
*/