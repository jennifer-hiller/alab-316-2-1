const objs = ["scissors", "paper", "rock"];
let computerScore = 0;
let userScore = 0;
const userCell = document.getElementById("user");
const computerCell = document.getElementById("computer");
const result = document.getElementById("result");
const button = document.getElementById("playAgain");
button.addEventListener("click", playGame);
function playGame() {
  button.textContent = "Play Again?";
  let playerChoice = prompt("Rock, Paper, or Scissors?");
  let playerSelection = playerChoice.toLowerCase();
  let computerSelection = objs[Math.floor(Math.random() * objs.length)];
  if (playerSelection === null) {
    return;
  }
  if (
    playerSelection !== "scissors" &&
    playerSelection !== "paper" &&
    playerSelection !== "rock"
  ) {
    result.textContent = "Invalid choice. Please try again.";
    return;
  }
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  } else if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    userScore++;
    userCell.textContent = userScore;
  } else {
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    computerCell.textContent = computerScore;
  }
}
