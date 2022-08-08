function getComputerChoice() {
    let a = Math.floor(Math.random() * 4);
    if (a == 1)
        return "rock";
    else if (a == 2)
        return "paper";
    else return "scissors";
}