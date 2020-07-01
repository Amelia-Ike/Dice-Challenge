//For Player One
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

//dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png"; 

//images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//For Player Two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player a player wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩Draw! 🚩";
}
