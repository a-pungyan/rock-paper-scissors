console.log("Test");

/* function named getComputerChoice 
    randomly returns rock, paper, or scissors
    hint: Math.random returns 0-1, how this can be used to do rock paper or scissors

function getHumanChoice 
    hint: prompt() to get user's input
    
two variables for scores, humanScore, 
    must initialize to 0
    make case insensitive
    
write logic to play single round 
    function playRound(humanChoice, computerChoice)
    increment the score variables after each round
    
whole game will be 5 rounds
function playGame will call playRound 5 times
*/
let humanScore = 0;
let computerScore = 0;
let computerChoice = "";

while(computerScore < 5 || humanScore < 5){
    
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    
    if (getComputerChoice() === 0) {
        return "rock";
    } else if (getComputerChoice() === 1) {
        return "paper";
    } else if (getComputerChoice() === 2) {
        return "scissors";
    } else {
        return NaN;
}}

const buttons = document.querySelectorAll(".options button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
    })
})

console.log(humanChoice);