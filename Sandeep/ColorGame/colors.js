function randomColor() {
	return Math.floor(Math.random() * 256);
}
var updateredcolor = randomColor();
var updategreencolor = randomColor();
var updatebluecolor  = randomColor();

document.getElementById('red').innerText = updateredcolor;
document.getElementById('green').innerText = updategreencolor;