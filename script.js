console.log("Test");

/* function named getComputerChoice 
    randomly returns rock, paper, or scissors
    hint: Math.random returns 0-1, how this can be used to do rock paper or scissors

function getHumanChoice 
    hint: prompt() to get user's input
    
two variables for scores, humanScore, computerScore
    must initialize to 0
    make case insensitive
    
write logic to play single round 
    function playRound(humanChoice, computerChoice)
    increment the score variables after each round
    
whole game will be 5 rounds
function playGame will call playRound 5 times
*/
function playGame(playRound, nRounds) {}

let humanScore = 0;
let computerScore = 0;
let computerChoice = "";

function playRound() {
        function getComputerChoice() {
        return Math.floor(Math.random() * 3);
        }

        if (getComputerChoice() === 0) {
            computerChoice = "rock";
        } else if (getComputerChoice() === 1) {
            computerChoice = "paper";
        } else if (getComputerChoice === 2) {
            computerChoice = "scissors";
        } else {
            computerChoice = NaN;
        }

    function getHumanChoice() {
        let humanChoice = prompt("Please enter your choice. Rock, paper, or scissors.");

        if (humanChoice !== null && humanChoice !== "") {
            return humanChoice;
        } else {
            console.log("Invalid input.");
            return null;
        }
    }
    
    function didUserWin(humanChoice, computerChoice) {
        if ((humanChoice = "rock") && (computerChoice = "paper")) {
            humanScore += 1;
        } else if ((humanChoice = "paper") && (computerChoice = "rock")) {
            humanScore += 1;
        } else if ((humanChoice = "scissors") && (computerChoice = "paper")) {
            humanScore += 1;
        } else if (humanChoice == computerChoice) {
            humanScore += 0;
            computerScore += 0;
        } else {
            humanScore += 0;
            computerScore += 0;
        }
    }
}


    

    
/*  */

