var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randbtn = document.querySelector("#random");

function colorChange() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";
}

function randomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function randColorsChange() {
	var newColor1 = randomColor();
	var newColor2 = randomColor();
	body.style.background = "linear-gradient(to right, " + newColor1 + ", " + newColor2 + ")";
	color1.value = newColor1;
	color2.value = newColor2;
	css.textContent = body.style.background + ";";
}

colorChange();
css.textContent = body.style.background + ";";

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

randbtn.addEventListener("click", randColorsChange);