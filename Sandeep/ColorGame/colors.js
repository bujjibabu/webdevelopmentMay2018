function randomColor() {
	return Math.floor(Math.random() * 256);
}
var r= randomColor();
var g= randomColor();
var b= randomColor();
document.getElementById('red').innerText = r;
document.getElementById('green').innerText  = g;
document.getElementById('blue').innerText   = b;
var arr = ["firstBox","secondBox","thirdBox","forthBox","fifthBox","sixthBox"];
for (var i = 0; i < arr.length; i++) {
	var x ='#'+arr[i];
	var color = "rgb(" + randomColor() +","+ randomColor() +","+ randomColor() +")";

	document.querySelector(x).style.backgroundColor = color;
	document.querySelector(x).style.borderColor = color;
}
function randomBox(){
	return Math.floor(Math.random() * arr.length);
}
var Originalcolor = "rgb("+r+", "+g+", "+b+")";
var OriginalBox ='#'+arr[randomBox()];
document.querySelector(OriginalBox).style.backgroundColor = Originalcolor;
document.querySelector(OriginalBox).style.borderColor =Originalcolor;
var status = document.querySelector('#gameStatus').innerText;

function selectedBox(clickedId){
	var cId = '#'+ clickedId
	var selectedColor = document.querySelector(cId).style.backgroundColor;
	if(status !="Correct"){
		if(Originalcolor== selectedColor){
			document.querySelector('#gameStatus').innerText="Correct";			
			status="Correct";
			for (var i = 0; i < arr.length; i++) {
				var x ='#'+arr[i];
				var color = Originalcolor;
				document.querySelector(x).style.backgroundColor = color;
				document.querySelector(x).style.borderColor = color;
				document.querySelector(x).style.visibility="visible";
				document.querySelector(".top").style.backgroundColor= color;
			}
		}
		else{
			document.querySelector(cId).style.visibility="hidden";
			document.querySelector('#gameStatus').innerText="Try again!"
		}
	}
}
