function getComputerChoice() {
    let a = Math.floor(Math.random() * 4);
    if (a == 1)
        return "rock";
    else if (a == 2)
        return "paper";
    else return "scissors";
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock")
        if (computerSelection == "rock")
            return "Draw";
        else if (computerSelection == "paper")
            return "You Lost! Paper beats Rock";
        else return "You Won! Rock beats Scissors";
    else if (playerSelection == "paper")
        if (computerSelection == "rock")
            return "You Won! Paper beats Rock";
        else if (computerSelection == "paper")
            return "Draw!";
        else return "You Lost! Scissors beats Paper";
    else
        if (computerSelection == "rock")
            return "You Lost! Rock beats Scissors";
        else if (computerSelection == "paper")
            return "You Won! Scissors beats Paper";
        else return "Draw!";
}
console.log(playRound("rock", "rock"));
