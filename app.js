//create choices//
const choices = ["rock", "paper", "scissors"]
const rck = document.querySelector("#rck");
rck.addEventListener('click', () => {
   playRound ("rock");
  playGame();
  scoreboard();
});
const ppr = document.querySelector("#ppr");
ppr.addEventListener('click', () => {
  playRound ("paper");
  playGame();
  scoreboard();
});
const scs = document.querySelector("#scs");
scs.addEventListener('click', () => {
    playRound("scissors")
    playGame();
    scoreboard();
});
let playerCount = 0
let computerCount = 0
//create strings
const win ="you win"
const lose ="you lose" 
const draw ="it's a draw" 
//create a function for the computer to play a random choice  of rock, paper, or scissors.//
function computerSelection() {
   let ai = choices[Math.floor(Math.random() *choices.length)]
   return ai;
};
//create a function for a single round of rock paper scissors the function needs to take the pervious funtions into account then retun a string stating whether you win or lose depending on the choices made by you and the computer.//
 function playRound(playerChoice){
    const computerChoice = computerSelection();
     if (playerChoice === computerChoice) {
        alert (draw);
        return + 0;
     }
     else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock") {
         alert (lose);
         computerCount ++;
     } 
     else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") { 
        alert (win);
        playerCount ++;
     }
     else {
         alert ("not working")
     }
 };
 //create a funtion for playing 5 rounds in a row
 function playGame() {
      if (playerCount >= 5) {
       alert ("you win thanks for playing.");
   }
   else if (computerCount >= 5) {
        alert ("you lose thanks for playing.")
   }
   console.log(playerCount);
   console.log(computerCount);
 };
//create a function for a scoreboard
function scoreboard() {
  let sb1 = document.querySelector("#sb1");
    sb1.innerText = playerCount;
  let sb2 = document.querySelector("#sb2");
    sb2.innerText = computerCount;
}