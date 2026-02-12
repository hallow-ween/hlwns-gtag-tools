function detectedUA() {
const ua = navigator.userAgent;
const chromeWeb = /Chrome|CriOS/.test(ua) && !/Edge|OPR/.test(ua);
const device = /iPhone|Android|iPod|iPad/.test(ua);
// const testPara = document.getElementById("test");
// testPara.textContent = ua;
  return chromeWeb || device;
}

if (detectedUA()) {
alert("⚠️ This tool might function incorrectly on your device and browser! Please switch to a different browser. You can still save your profile picture by taking a screenshot!"); 
}

// Getting color vals

const redS =    
  document.getElementById("RedSlider");
const blueS = 
  document.getElementById("BlueSlider");
const greenS = 
  document.getElementById("GreenSlider");


  const redLabel =    
  document.getElementById("redLabel");
const blueLabel = 
  document.getElementById("blueLabel");
const greenLabel = 
  document.getElementById("greenLabel");

const colorBox =
  document.getElementById("ColorBox");

function updateColor() {
const Red = 
  redS.value;
const Blue =
  blueS.value;
const Green =
  greenS.value;

const updatedColor =
  `rgb(${Red}, ${Green}, ${Blue})`;

colorBox.style.backgroundColor =
  updatedColor;

redLabel.textContent = "Red: " + Red;
greenLabel.textContent = "Green: " + Green;
blueLabel.textContent = "Blue: " + Blue;

}

redS.addEventListener("input", updateColor);
greenS.addEventListener("input", updateColor);
blueS.addEventListener("input", updateColor);

updateColor();

// makes profile together and downloadable

const downloadB = document.getElementById("downloadBtn");

downloadB.addEventListener("click", function() {
const entireEle = document.querySelector(".container");

  
html2canvas(entireEle).then(canvas => {
canvas.toBlob(function(blob) {
const downloadLink =  document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "profilebyhlwn.png";
  downloadLink.click();
});
});
});

const openB = document.getElementById("openBtn");

openB.addEventListener("click", function() {
const entireEle = document.querySelector(".container");

 const newWindow = window.open('profile.html', "_blank");
  
html2canvas(entireEle).then(canvas => {
    const imgURL = canvas.toDataURL(); 
    newWindow.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <link rel="stylesheet" href="styles.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Credits Page!">
<title> GTAG Profile Maker | Generated Profile </title>
 <link rel="icon" type="image/png" href="namelogo.PNG">
</head>
<body>
<ul>
<li><a href="profilegen.html">Profile Maker</a></li>
<li><a href="colorcode.html">Color Code to RGB</a></li>
 <li><a href="cosgen.html">Outfit Gen</a></li>
 <li><a href="qotd.html">QOTD</a></li>
 <li><a href="trivia.html">Trivia</a></li>
  <li><a href="clicker.html">Clicker Game (WIP) </a></li>
   <li><a href="cosmeticfinder.html">GSearch</a></li>
</ul>
<h2>Here is your profile!</h2>
<img src="${imgURL}" style="height: 300px; width: 300px"></img>
<footer> 

<p>Created by halloween (@hallowween-gtag)</p>
<div class="disclaimer">
<p>This product is not affiliated with Another Axiom Inc. or its videogames Gorilla Tag and Orion Drift and is not endorsed or otherwise sponsored by Another Axiom. </p>
<p> Portions of the materials contained herein are property of Another Axiom. ©2021 Another Axiom Inc.</p>
</div>
</footer>
</body>
 

</html>


`);
  });
});


// Code for all the hats


const hats = [
{image: "Cosmetics/tophat.PNG"},
{image: "Cosmetics/chefshat.PNG"},
{image: "Cosmetics/cowboyhat.PNG"},
{image: "Cosmetics/headphones.PNG"},
{image: "Cosmetics/partyhat.PNG"},
{image: "Cosmetics/ushanka.PNG"},
{image: "Cosmetics/fez.PNG"},
{image: "Cosmetics/pumpkin.PNG"},
{image: "Cosmetics/pumpkinpiehat.PNG"},
{image: "Cosmetics/orangebeanie.PNG"},
{image: "Cosmetics/bluebeanie.PNG"},
{image: "Cosmetics/pattern.PNG"},
{image: "Cosmetics/stripe.PNG"},
{image: "Cosmetics/catears.PNG"},
{image: "Cosmetics/santahat.PNG"},
{image: "Cosmetics/nosesnowflake.PNG"},
{image: "Cosmetics/elfhat.PNG"},
{image: "Cosmetics/2026glasses.PNG"}
];

const hatsLength = hats.length;
let selectedHat = -1;



const hatsImage = document.getElementById("hatsImage");

function updateHats() {
if(selectedHat >= 0) {
let hatsSrc = hats[selectedHat].image;
hatsImage.src = hatsSrc;
} else {
   hatsImage.src = "#";
}
}


function forwardForHats() {
if(selectedHat < hatsLength - 1) {
selectedHat++;
console.log(selectedHat);
updateHats();
}}

function backwardsForHats
() {
if(selectedHat > -1) {
selectedHat--;
console.log(selectedHat);
updateHats();
}}

// code for all badges

const badges = [
{image: "Cosmetics/anotheraxiom.PNG"},
{image: "Cosmetics/fingerpainter.PNG"}
];

const badgesLength = badges.length;
let selectedBadge = -1;

const badgesImage = document.getElementById("badgesImage");

function updateBadges() {
if(selectedBadge >= 0) {
let badgeSrc = badges[selectedBadge].image;
badgesImage.src = badgeSrc;
} else {
   badgesImage.src = "#";
}
}


function forwardForBadge() {
if(selectedBadge < badgesLength - 1) {
selectedBadge++;
console.log(selectedBadge);
updateBadges();
}}

function backwardsForBadge
() {
if(selectedBadge > -1) {
selectedBadge--;
console.log(selectedBadge);
updateBadges();
}}
