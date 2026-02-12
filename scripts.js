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

 const newWindow = window.open('', "_blank");
  
html2canvas(entireEle).then(canvas => {
    const imgURL = canvas.toDataURL(); 
    newWindow.document.write(`<img src="${imgURL}">`);
    newWindow.document.title = "Profile Pic :)";
  });
});



let currentImg = 0;
let allCosmetics = 21;
let highCosmetics = 21;
let lowCosmetics = 0;

const tophat =
  document.getElementById("1");
const bananahat =
  document.getElementById("2");
const chefshat =
  document.getElementById("3");
const cowboyhat =
  document.getElementById("4");
const headphones =
  document.getElementById("5");
const partyhat =
  document.getElementById("6");
const ushanka =
  document.getElementById("7");
const fez =
  document.getElementById("8");
const pumpkin = 
  document.getElementById("9");
const aac = 
  document.getElementById("10");
const fingerpaint = 
  document.getElementById("11");
const pumpkinpiehat =
  document.getElementById("12");
const orangebeanie =
  document.getElementById("13");
const bluebeanie =
  document.getElementById("14");
const pattern =
  document.getElementById("15");
const stripe =
  document.getElementById("16");
const catears =
  document.getElementById("17");
const santahat =
  document.getElementById("18");
const snowflake =
  document.getElementById("19");
const elfhat =
  document.getElementById("20");
const twentysix = 
  document.getElementById("21");
const everyImage =
  document.getElementById("allCos");

const hats = [tophat, bananahat, chefshat, cowboyhat, headphones, partyhat, ushanka, fez, pumpkin, aac, fingerpaint, pumpkinpiehat, orangebeanie, bluebeanie, pattern, stripe, catears, santahat, elfhat, snowflake, twentysix];
  hats.forEach(hat => hat.style.opacity = 0);
  

function updateImage() {
  
  hats.forEach(hat => hat.style.opacity = 0);
  // const testPara = document.getElementById("test");
// testPara.textContent = currentImg;
  
  switch (currentImg) {
case 0:
everyImage.style.opacity = 1;
hats.forEach(hat => hat.style.opacity = 0);
  break;
case 1: 
tophat.style.opacity = 1;
  break;
case 2: 
bananahat.style.opacity = 1;
  break;
case 3: 
chefshat.style.opacity = 1;
  break;
case 4:
cowboyhat.style.opacity = 1;
  break;
case 5: 
headphones.style.opacity = 1;
break;
case 6:
partyhat.style.opacity = 1;
break;
case 7:
ushanka.style.opacity = 1;
break;
case 8:
fez.style.opacity = 1;
break;  
case 9:
pumpkin.style.opacity = 1;
break;
case 10:
aac.style.opacity = 1;
break;  
case 11:
fingerpaint.style.opacity = 1;
break;
case 12:
pumpkinpiehat.style.opacity = 1;
break;
case 13:
orangebeanie.style.opacity = 1;
break;
case 14:
bluebeanie.style.opacity = 1;
break;
case 15:
pattern.style.opacity = 1;
break;
case 16:
stripe.style.opacity = 1;
break;
case 17:
catears.style.opacity = 1;
break;
case 18:
santahat.style.opacity = 1;
break;
case 19:
snowflake.style.opacity = 1;
break;
case 20:
elfhat.style.opacity = 1;
break;
case 21: 
twentysix.style.opacity = 1;
break;
  }
}

function forward() {
if (currentImg < highCosmetics) {
  currentImg++;
updateImage();
}
}

function back() {
if (currentImg > 0) {
  currentImg--;
  updateImage();
}
}
                          
