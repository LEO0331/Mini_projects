var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random_1 = document.getElementById("enter1");
var random_2 = document.getElementById("enter2");

function setGradient() {
	body.style.background = //change background of CSS by body Html
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";//css.innerHTML = body.style.background + ";"
}

function setColor_1(){

	var random_color_1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)//generate random color 
	body.style.background = 
	"linear-gradient(to right, " 
	+ random_color_1
	+ ", " 
	+ color2.value
	+ ")";
	color1.value = random_color_1;
	css.textContent = body.style.background + ";";
}

function setColor_2(){

	var random_color_2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)//generate random color 
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ random_color_2
	+ ")";
	color2.value = random_color_2;
	css.textContent = body.style.background + ";";
}
//color1.addEventListener("load", setGradient);
//color2.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);//input event: click, mouseenter, keypress
color2.addEventListener("input", setGradient);

random_1.addEventListener("click", setColor_1);
random_2.addEventListener("click", setColor_2);