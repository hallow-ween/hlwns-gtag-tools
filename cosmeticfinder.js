const input = document.getElementById("inputText"); 
const input2 = document.getElementById("inputTextId"); 
const cosmeticInfoText = document.getElementById("cosmeticInfoText");
const cosmeticImage = document.getElementById("cosmeticImage");
const input3 = document.getElementById("inputTextGroup");

cosmeticImage.src = "cosmetic-img/placeholder.png";


function findCosmetic(inputName, searchType) { 
const inputValue = inputName.value.toLowerCase().trim(); 

fetch("cosmetics.json")
.then(response => response.json())
.then( data => { 
const cosmetic = data.find(cos => cos[searchType] === inputValue);

if (!cosmetic) {
    console.log("cosmetic does not exist!");
    cosmeticInfoText.textContent = "Cosmetic could not be found!"
    cosmeticImage.src = "cosmetic-img/placeholder.png";
    return;
}



const cosmeticName = cosmetic.name.charAt(0).toUpperCase() + cosmetic.name.slice(1);
const cosmeticId = cosmetic.id.toUpperCase();
const cosmeticPrice = cosmetic.price;
const cosmeticSourceImage = cosmetic.source;
let cosmeticGroup = cosmetic.group;

if (cosmeticGroup == undefined) {
cosmeticGroup = "To be Added!";
}

const cosmeticInfo = `Name: ${cosmeticName}, 
ID: ${cosmeticId}, 
Price: ${cosmeticPrice}
Type: ${cosmeticGroup}`;

cosmeticInfoText.textContent = cosmeticInfo;

if (cosmeticSourceImage === "placeholder.png") {
console.log("no source image found!");
cosmeticImage.src = "cosmetic-img/placeholder.png"

return;
}  else {
console.log("image sucessfully loaded!");
}

cosmeticImage.src = cosmeticSourceImage;
});
} 

input.addEventListener("keydown", (event) => { 
    if (event.key === "Enter") {
findCosmetic(input, "name");

    }
 });

 input2.addEventListener("keydown", (event) => { 
    if (event.key === "Enter") {
findCosmetic(input2, "id");

    }
 });

 


