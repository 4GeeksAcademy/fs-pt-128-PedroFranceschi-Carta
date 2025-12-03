import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";





window.onload = function () {
  //write your code here
  const newNumber = document.getElementById("number");
  const newPinta = document.getElementsByClassName("pinta")

  const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const pintaArray = ["♦", "♥", "♠", "♣"]

  let numberDisplay = Math.floor(Math.random() * number.length);
  let pintaDisplay = Math.floor(Math.random() * pintaArray.length);
  

  newNumber.textContent = number[numberDisplay]

  newPinta[0].innerHTML = pintaArray[pintaDisplay]
  newPinta[1].innerHTML = pintaArray[pintaDisplay]

  // newPinta.forEach(element => {
  //   element.textContent = pintaArray[pintaDisplay]
  // });

};
