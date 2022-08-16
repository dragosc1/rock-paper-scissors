function getComputerChoice() {
    let a = Math.floor(Math.random() * 4);
    if (a == 1)
        return "rock";
    else if (a == 2)
        return "paper";
    else return "scissors";
}
let YourScore = 0, ComputerScore = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock")
        if (computerSelection == "rock")
            return "Draw";
        else if (computerSelection == "paper") {
            ComputerScore++;
            return "You Lost! Paper beats Rock";
        }
        else {
            YourScore++;
            return "You Won! Rock beats Scissors";
        }
    else if (playerSelection == "paper")
        if (computerSelection == "rock") {
            YourScore++;
            return "You Won! Paper beats Rock";
        }
        else if (computerSelection == "paper")
            return "Draw!";
        else {
            ComputerScore++;
            return "You Lost! Scissors beats Paper";
        }
    else
        if (computerSelection == "rock") {
            ComputerScore++;
            return "You Lost! Rock beats Scissors";
        }
        else if (computerSelection == "paper") {
            YourScore++;
            return "You Won! Scissors beats Paper";
        }
        else 
            return "Draw!";
}