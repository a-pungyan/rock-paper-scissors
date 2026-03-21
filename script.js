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


function playGame() {}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = "";
        function getComputerChoice() {
            return Math.floor(Math.random() * 3);
        }

        if (getComputerChoice() === 0) {
            computerChoice = "Rock";
        } else if (getComputerChoice() === 1) {
            computerChoice = "Paper";
        } else if (getComputerChoice === 2) {
            computerChoice = "Scissors";
        } else {
            computerChoice = NaN;
        }

    let userInput = prompt("Enter your choice", 0)
        if (userInput !== null) {
            const humanChoice = userInput.toUpperCase; //need to 
        }
    
}
    


