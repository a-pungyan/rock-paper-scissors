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
let humanChoice = "";


function getComputerChoice() { //gets computer choice
    return Math.floor(Math.random() * 3);
    
    if (getComputerChoice() === 0) {
        return computerChoice="rock";
    } else if (getComputerChoice() === 1) {
        return computerChoice="paper";
    } else if (getComputerChoice() === 2) {
        return computerChoice="scissors";
    } else {
        return NaN;
}}

const buttons = document.querySelectorAll(".options button")

buttons.forEach((button) => { //gets human choice on click on their choice
    button.addEventListener("click", () => {
        humanChoice = button.id;
        playRound(humanChoice, computerChoice);
    })
})

function playRound(humanChoice, computerChoice) {
    getComputerChoice();
    if (computerChoice === humanChoice) {
        return NaN;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
    } else {
        computerScore++;
    }
}