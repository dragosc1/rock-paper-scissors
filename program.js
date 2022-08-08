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
alert('Rock paper scissors!\nScore 3 points to win');
let counter = 5;
for (let i = 0; i < counter; i++) {
    let pS = prompt(`Your choice for the round ${i + 1}`);
    let cS = getComputerChoice();
    let result = playRound(pS, cS);
    if (result == "Draw!")
        counter++;
    if (YourScore > 2 || ComputerScore > 2)
        break;
    alert(`Computer picked ${cS}\n` + result + `\n\nYour score: ${YourScore}\nComputer score: ${ComputerScore}`);
    console.log(result);
}
if (YourScore > ComputerScore) 
    alert(`You've won the match!\n\nYour score: ${YourScore}\nComputer score: ${ComputerScore}`);
else if (YourScore < ComputerScore) 
    alert(`You've lost the match!\n\nYour score: ${YourScore}\nComputer score: ${ComputerScore}`);