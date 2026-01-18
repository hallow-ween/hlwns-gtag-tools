const redCS =    
  document.getElementById("RColorSlider");
const blueCS = 
  document.getElementById("BColorSlider");
const greenCS = 
  document.getElementById("GColorSlider");

const redValC =
  document.getElementById("redC");
const blueValC =
  document.getElementById("blueC");
const greenValC =
  document.getElementById("greenC");
  
const rgbtext =
  document.getElementById("rgbtext");

const rgb =
  document.getElementById("rgb");



function showColor() {
	
const r = redCS.value;
const b = blueCS.value;
const g = greenCS.value;

let rr = Math.round((r / 10 ) * 255);
let bb = Math.round((b / 10 )* 255);
let gg = Math.round((g / 10 )* 255);

const colorCode =
`rgb(${rr}, ${gg}, ${bb})`;
rgbtext.textContent = colorCode;

let rri = 255 - rr ;
let bbi = 255 - bb ;
let ggi = 255 - gg ;

const colorCodeI =
`rgb(${rri}, ${ggi}, ${bbi})`;
rgbtext.style.color = colorCodeI;

redValC.textContent = "Red: " + r;
greenValC.textContent = "Green: " + g;
blueValC.textContent = "Blue: " + b;

rgb.style.backgroundColor = `rgb(${rr}, ${gg}, ${bb})`;

}

redCS.addEventListener("input", showColor);
greenCS.addEventListener("input", showColor);
blueCS.addEventListener("input", showColor);

showColor();
