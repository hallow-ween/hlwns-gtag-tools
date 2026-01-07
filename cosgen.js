

const arrayHat = [
  "party hat", "top hat", "monke hat", "chef hat", "headphones", "flower crown",
  "banana hat", "fez", "sunhat", "cowboy hat", "fez", "sweatband", "baseball cap",
  "pineapple hat", "coconut hat", "santa hat", "elf hat", "snowman hat", "pumpkin hat",
  "pattern beanie", "stripe beanie", "blue beanie", "orange beanie", "heart beanie",
  "plunger", "saucepan", "gt1", "gt2", "gt3", "gt4", "rain hat", "bunny ears",
  "seagull", "pumpkin head", "pie hat", "scarecrow hat", "angel wings", "cloud hat",
  "rain deer hat", "snowman top hat", "ushanka"
];

const arrayCos = [
  "red scarf", "bow tie", "santa beard", "nose snowflake", "candy cane", "face scarf", 
  "maple leaf", "turkey fingers", "turkey leg", "icicle", "rosy cheeks", "red rose",
  "gold rose", "cookie jar", "black umbrella", "cloud umbrella", "cloud boots",
  "guitar", "electric guitar", "lightning makeup", "popsicle", "bubbler", "rubber duck",
  "sunburn", "sunscreen", "flamingo floatie", "candy bar", "slinky eyes",
  "spider umbrella", "unicorn", "yorick", "frying pan", "finger olives", "ladle",
  "tux tee", "cloud tee", "gingerbread man", "pudding", "mittens"
];

const cos1 = document.getElementById("cos1");
const cos2 = document.getElementById("cos2");
const cos3 = document.getElementById("cos3");

function randomHat() {
const randomHatNum =
Math.floor(Math.random() * arrayHat.length);
cos1.textContent = arrayHat[randomHatNum];
}

function randomCos() {
const randomCosNum =
Math.floor(Math.random() * arrayCos.length);
cos2.textContent = arrayCos[randomCosNum];
}

function randomCos2() {
const randomCosNum =
Math.floor(Math.random() * arrayCos.length);
cos3.textContent = arrayCos[randomCosNum];
}

function generateCos() {
randomHat();
randomCos();
randomCos2();
}
