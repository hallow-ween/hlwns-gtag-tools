
   const upgrades = [
       { upgradeName: "doubleClick", upgradeCost: 500, owned: false },
       { upgradeName: "AutoClicker", upgradeCost: 2500, owned: false },
       { upgradeName: "clickRush", upgradeCost: 5000, owned: false }
   ];


   let clicks = 0;

   const upg1Button = document.getElementById("upgrade1");
   const upg2Button = document.getElementById("upgrade2");
   const upg3Button = document.getElementById("upgrade3");
   
   const clickButton = document.getElementById("clickButton");
   const clickCounter = document.getElementById("clickCounter");
   
   const alertText = document.getElementById("alert");

   let addedClicks = 1;

   function buyUpgrade(index, upgradeFunction) {
       const upgrade = upgrades[index];
       if (upgrade.owned) {
           console.log("you already own this!");
           alertText.textContent = "you already own this!";
           setTimeout(() => {
               alertText.textContent = "";
           }, 1000);
       }
       
                if (upgrade.owned) return;

       if (upgrade.upgradeCost <= clicks) {
           console.log(`you bought ${upgrade.upgradeName}`);
           alertText.textContent = `you bought ${upgrade.upgradeName}`;
           setTimeout(() => {
               alertText.textContent = "";
           }, 1000);
           upgrade.owned = true;
           clicks = clicks - upgrade.upgradeCost;
           upgradeFunction();
           updateClicks();
       } else {
           console.log(`you don't have enough clicks!`);
           console.log(`you bought ${upgrade.upgradeName}`);
           alertText.textContent = `you don't have enough clicks!`;
           setTimeout(() => {
               alertText.textContent = "";
           }, 1000);
       }


   }
    // UPGRADE FUNCTIONS

    function doubleClick() { 
        
        if (upgrades[0].owned) {
        addedClicks = 2; 
        }
    }

    function autoClicker() {
       if (upgrades[1].owned) {
           setInterval(() => {
               clicks++;
               updateClicks();
           }, 3000);
       }
    }

    function clickRush() {
    
let clickRushChance = 0;
    clickRushChance = Math.ceil(Math.random()* 500);
    console.log(clickRushChance);
    
    if(upgrades[2].owned) {
        if(clickRushChance === 73) {
           addedClicks = 5;
            alertText.textContent = "5X CLICKS FOR 10 SECONDS!!";
            setTimeout(() => {
            addedClicks = 1;
            alertText.textContent = "";
            }, 10000); 

        }   
    }
}   


   function buttonClicked() {
       clicks += addedClicks;
       clickButton.classList.remove("opacity");
         void clickButton.offsetHeight;
       clickButton.classList.add("opacity");
    
    // CRIT CHANCE CODE
   let critChance = 0;
    critChance += Math.ceil(Math.random() * 100);
   
      if (critChance > 70) {
        clicks += 1;
        alertText.textContent = "Critical Click!";
        setTimeout(() => {
        alertText.textContent = "";
        }, 1000);
        critChance = 0;
    }

       updateClicks();
   }

   function updateClicks() 
   {
       clickCounter.textContent = `C L I C K S: ${clicks}`;
   }

function onButtonClick() {
buttonClicked()
clickRush()
}

   upg1Button.addEventListener("click", () => buyUpgrade(0, doubleClick));
   upg2Button.addEventListener("click", () => buyUpgrade(1, autoClicker));
   upg3Button.addEventListener("click", () => buyUpgrade(2, clickRush));   
   clickButton.addEventListener("click", () => onButtonClick());
