//create choices//
const choices = ["rock", "paper", "scissors"]
//create strings
const win ="you win"
const lose ="you lose" 
const draw ="it's a draw" 
//create loop info
let playerChoice = 0
let computerChoice = 0

//create a function for the computer to play a random choice  of rock, paper, or scissors.//
function computerselection() {
    let ai = choices[Math.floor(Math.random() *choices.length)]
   return ai;
   
};
//create a function for the player to choose a weapon.(rock, paper, or scissors)
 function playerselection(){
     let weapon = prompt("choose your weapon") 
    if (weapon.toLowerCase() == "rock"){
        return "rock";
    }
    else if (weapon.toLowerCase() == "paper"){
        return "paper";
    }
    else if (weapon.toLowerCase() == "scissors"){
        return "scissors";
    }
    else {
        return ("not a choice.");
    }
 };
//create a function for a single round of rock paper scissors the function needs to take the pervious funtions into account then retun a string stating whether you win or lose depending on the choices made by you and the computer.//
 function playround(){
    const computerChoice = computerselection();
    const playerChoice = playerselection();
     if (playerChoice === computerChoice) {
        alert (draw);
        return + 0;
     }
     else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock") {
         alert (lose);
         return - 1;
     }
     else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") { 
        alert (win);
        return + 1;
     }
     else {
         alert ("not working")
     }
 };
//create a function called game that loop five rounds of rock paper scissors when the game is over retun the results of the game by string either you lose or you won.//

function playgame() {
    let roundcount = 0
     while (roundcount < 5 && roundcount > -5) {
     
      roundcount += playround();
        console.log(roundcount);
    }
    alert('Thanks for playing!');
};