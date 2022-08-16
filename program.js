let MyScore = 0, ComputerScore = 0, round = 1;
function getComputerChoice() {
    let a = Math.floor(Math.random() * 3) + 1;
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
            return "Draw!";
        else if (computerSelection == "paper") {
            ComputerScore++;
            return "You Lost! Paper beats Rock";
        }
        else {
            MyScore++;
            return "You Won! Rock beats Scissors";
        }
    else if (playerSelection == "paper")
        if (computerSelection == "rock") {
            MyScore++;
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
            MyScore++;
            return "You Won! Scissors beats Paper";
        }
        else 
            return "Draw!";
}
const buttons = document.querySelectorAll('.buttons button');
const container = document.querySelector('.container');

function updateRound() {
    round++;
    const roundclass = document.querySelector('.round');
    let actualRound = document.querySelector('.round .number');
    roundclass.removeChild(actualRound);
    actualRound = document.createElement('p');
    actualRound.textContent = `${round}`;
    actualRound.classList.add('number');
    roundclass.appendChild(actualRound);
}

function updateScore() {
    const myScoreClass = document.querySelector('.myscore');
    let myScore = document.querySelector('.ms');
    myScoreClass.removeChild(myScore);
    myScore.textContent = `${MyScore}`;
    myScoreClass.appendChild(myScore);
    const computerScoreClass = document.querySelector('.computerscore');
    let computerScore = document.querySelector('.cs');
    computerScoreClass.removeChild(computerScore);
    computerScore.textContent = `${ComputerScore}`;
    computerScoreClass.appendChild(computerScore);
}

buttons.forEach(button => button.addEventListener('click', function(e) {
    if (MyScore == 3 || ComputerScore == 3)
        return; 
    cS = getComputerChoice();
    const text = document.createElement('p'); 
    text.textContent = playRound(e.target.innerText, cS);
    text.style.textAlign = 'center';
    text.style.fontSize = '20px';
    text.style.color = "#8E9800";
    container.appendChild(text);
    setTimeout(function() {
        container.removeChild(text);
    }, 1250);
    updateRound();
    updateScore();
    if (MyScore == 3) {
        const won = document.createElement('h1');
        won.style.fontSize = "30px"
        won.style.color = "green";
        won.textContent = "You've WON the match!";
        container.appendChild(won);
    }
    if (ComputerScore == 3) {
        const lost = document.createElement('h1');
        lost.style.fontSize = "30px";
        lost.style.color = "red";
        lost.textContent = "You've LOST the match!";
        container.appendChild(lost);
    }
    if (MyScore == 3 || ComputerScore == 3) {
        const replay = document.createElement('button');
        replay.textContent = "Replay";
        replay.style.marginTop = "10px";
        replay.classList.add("replay");
        container.appendChild(replay);
        replay.addEventListener('click', function() {
            window.location.reload();
        });
    }
}));