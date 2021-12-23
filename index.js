// for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // finding image 1

image1.setAttribute("src", randomImageSource); // replace with image


// for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number 1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // image file including directory path

// replace with image
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins, print player 1 won
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
//If player 2 wins, print player 2 won
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//If they are tied, print draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}



// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//
// if (randomNumber1 === 1) {
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 === 2) {
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// } else if (randomNumber1 === 3) {
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// } else if (randomNumber1 === 4) {
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// } else if (randomNumber1 === 5) {
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// } else if (randomNumber1 === 6) {
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// if (randomNumber2 === 1) {
//   document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
// } else if (randomNumber2 === 2) {
//   document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
// } else if (randomNumber2 === 3) {
//   document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
// } else if (randomNumber2 === 4) {
//   document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
// } else if (randomNumber2 === 5) {
//   document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
// } else if (randomNumber2 === 6) {
//   document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
// }
//
//
//
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins!";
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins!";
// } else {
//   document.querySelector("h1").innerHTML = "Draws!";
// }
