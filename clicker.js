   const upgrades = [
       { upgradeName: "doubleClick", upgradeCost: 500, owned: false },
       { upgradeName: "tripleClick", upgradeCost: 100, owned: false }
   ];


   let clicks = 0;

   const upg1Button = document.getElementById("upgrade1");
   const upg2Button = document.getElementById("upgrade2");
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

   function doubleClick() { addedClicks = 2; }

   function autoClicker() {
       if (upgrades[1].owned) {
           setInterval(() => {
               clicks++;
               updateClicks();
           }, 3000);
       }


   }


   function buttonClicked() {
       clicks += addedClicks;
       clickButton.classList.remove("opacity");
       void clickButton.offsetHeight;
       clickButton.classList.add("opacity");


       updateClicks();
   }

   function updateClicks() {

       clickCounter.textContent = `C L I C K S: ${clicks}`;
   }


   upg1Button.addEventListener("click", () => buyUpgrade(0, doubleClick));
   upg2Button.addEventListener("click", () => buyUpgrade(1, autoClicker));
   clickButton.addEventListener("click", () => buttonClicked());


