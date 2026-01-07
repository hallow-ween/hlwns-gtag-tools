	const quotes = [
		"Words Of Wisdom: stay kind :)", 
		"GTAG Tip: Work on wall climbing by using a 90 degree angle.", 
		"GTAG Tip: Practice Gorilla Tag a lot! ", 
		"When you eat a hotdog dont eat it sideways", 
		"GTAG Tip: If you are struggling, try using the lava monke speed boost!",
		"GTAG Tip: The ranked gamemode can be found in comp course",
		"GTAG Tip: You can now change your game language in the computer!",
		"GTAG Tip: Your actual arms have dont have hitboxes, which allows for cool tricks!",
		"Words of Wisdom: Be kind to yourself as well!",
		"GTAG Tip: You gain 100 Shiny Rocks every DAY!",
		"GTAG Tip: You can also report a user in the Meta menu!",
		"GTAG Tip: There are not legal or illegal mods, all of them can be risky!",
		"GTAG Tip: All of your videos recorded on the camera are synced to your files!",
		"GTAG Tip: Some game modes are alternated out, so play them while you can!",
		"Fun Fact! Gorilla Tag was released to Steam on February 12, 2021!"
	];
	
	const date = document.getElementById("theDate");
	
	
function dailyQuote() {
	const currentDay = new Date();
    const day = currentDay.getDate();
	const dayQuote = day % quotes.length;
	const quote =  quotes[dayQuote];
	return quote;
	}

const todaysdate = document.getElementById("todaysdate");
window.onload = function() {


const todaysDate = new Date();
 const todaysMonth = todaysDate.getMonth() + 1;
 const todaysDay = todaysDate.getDate();
 const todaysYear = todaysDate.getFullYear();

let fullDate = `${todaysMonth}/${todaysDay}/${todaysYear}`
todaysdate.textContent = "Date: " + fullDate;

}



const quoteEle = document.getElementById("quoteEle");
quoteEle.textContent = dailyQuote();
