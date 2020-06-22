// First Dice
let randomNum1 = Math.random() * 6;
randomNum1 = Math.floor(randomNum1) + 1;

let randomDiceImg = "dice" + randomNum1 + ".png";
let randomImageSrc = "images/" + randomDiceImg;

let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSrc);

// Second Dice
let randomNum2 = Math.random() * 6;
randomNum2 = Math.floor(randomNum2) + 1;

let randomDiceImg2 = "dice" + randomNum2 + ".png";
let randomImageSrc2 = "images/" + randomDiceImg2;

let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSrc2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
} else if (randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Plater 2 Wins!!";
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}