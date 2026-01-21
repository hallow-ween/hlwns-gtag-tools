 const upgrades = [
     { upgradeName: "doubleCLick", upgradeCost: 500, owned: false },
     { upgradeName: "tripleClick", upgradeCost: 2500, owned: false }
 ];


 let clicks = 0;

 const upg1Button = document.getElementById("upgrade1");
 const upg2Button = document.getElementById("upgrade2");
 const clickButton = document.getElementById("clickButton");
 const clickCounter = document.getElementById("clickCounter");

 let addedClicks = 1;

 function buyUpgrade(index, upgradeFunction) {
     const upgrade = upgrades[index];
     if (upgrade.owned) {
         console.log("you already own this!");
     }
     if (upgrade.owned) return;

     if (upgrade.upgradeCost <= clicks) {
         console.log(`you bought ${upgrade.upgradeName}`);
         upgrade.owned = true;
         clicks = clicks - upgrade.upgradeCost;
         upgradeFunction();
         updateClicks();
     } else {
         console.log(`you don't have enough clicks!`);
     }


 }

 function doubleClick() { addedClicks = 2; }

 function autoClicker() {
     if (upgrades[1].owned) {
         setInterval(() => {
             clicks++;
             updateClicks();
         }, 3000);
     }
     
 
 }


 function clickIncrease() {
     clicks += addedClicks;
     updateClicks();
 }

 function updateClicks() {

     clickCounter.textContent = `C L I C K S: ${clicks}`;
 }


 upg1Button.addEventListener("click", () => buyUpgrade(0, doubleClick));
 upg2Button.addEventListener("click", () => buyUpgrade(1, autoClicker));
 clickButton.addEventListener("click", () => clickIncrease());



