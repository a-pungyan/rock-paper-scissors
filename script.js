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

let gameState = "preGame"

function playGame(gameState) {
    var gameState = "inGame";
    if (humanScore < 5 && computerScore < 5) {
        playRound();
    } else if (humanScore === 5 || computerScore === 5) {
        gameState ="gameOver";
        return;

let humanScore = 0;
let computerScore = 0;
let computerChoice = "";

function playRound(humanChoice, computerChoice) {
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
            return;
        }
    }

    return;
}

function updateHumanScore(humanScore) {
    if (humanScore === 0) {
        document.getElementById("you").src="";
    } else if (humanScore === 1) {
        document.getElementById("you").src="pictures/tally1.PNG";
    } else if (humanScore === 2) {
        document.getElementById("you").src="pictures/tally2.PNG";
    } else if (humanScore === 3) {
        document.getElementById("you").src="pictures/tally3.PNG";
    } else if (humanScore === 4) {
        document.getElementById("you").src="pictures/tally4.PNG";
    } else if (humanScore === 5) {
        document.getElementById("you").src="pictures/tally5.PNG";
    } else {
        return; 
    }
}

function updateComputerScore(computerScore) {
    if (computerScore === 0) {
        document.getElementById("you").src="";
    } else if (computerScore === 1) {
        document.getElementById("you").src="pictures/tally1.PNG";
    } else if (computerScore === 2) {
        document.getElementById("you").src="pictures/tally2.PNG";
    } else if (computerScore === 3) {
        document.getElementById("you").src="pictures/tally3.PNG";
    } else if (computerScore === 4) {
        document.getElementById("you").src="pictures/tally4.PNG";
    } else if (computerScore === 5) {
        document.getElementById("you").src="pictures/tally5.PNG";
    } else {
        return;
    }
}

