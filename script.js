const objs = ["scissors", "paper", "rock"];
let playAgain = true;
let computerScore = 0;
let userScore = 0;
const app = document.querySelector("#app");
while (playAgain) {
  let playerChoice = prompt("Choose: scissors, paper, rock");
  let playerSelection = playerChoice.toLowerCase();
  let computerSelection = objs[Math.floor(Math.random() * objs.length)];
  if (playerSelection === computerSelection) {
    app.textContent = "It's a tie!";
  } else if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    app.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    app.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  playAgain = confirm("Play again?");
}
