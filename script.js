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
    computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoice === 1) {
        return computerChoice="rock";
    } else if (computerChoice === 2) {
        return computerChoice="paper";
    } else if (computerChoice === 3) {
        return computerChoice="scissors";
    } else {
        return;
}}

const buttons = document.querySelectorAll(".options button")

buttons.forEach((button) => { //gets human choice on click on their choice
    button.addEventListener("click", () => {
        humanChoice = button.id;
        playRound(humanChoice, computerChoice);
        document.getElementById("status").textContent = `computer selected: ${computerChoice}`
    })
})

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        document.getElementById("whoWon").textContent = `it's a tie`;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        document.getElementById("whoWon").textContent = `you won`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        document.getElementById("whoWon").textContent = `you won`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        document.getElementById("whoWon").textContent = `you won`
    } else {
        computerScore++;
        document.getElementById("whoWon").textContent = `computer won`
    }

// update tallies
    if(humanScore === 1) {
        document.getElementById("humanTally").src = "assets/pictures/tally1.PNG";
    } else if(humanScore === 2) {
        document.getElementById("humanTally").src = "assets/pictures/tally2.PNG";
    } else if(humanScore === 3) {
        document.getElementById("humanTally").src = "assets/pictures/tally3.PNG";
    } else if(humanScore === 4) {
        document.getElementById("humanTally").src = "assets/pictures/tally4.PNG";
    } else if(humanScore === 5) {
        document.getElementById("humanTally").src = "assets/pictures/tally5.PNG";
        document.getElementById("whoWon").textContent = `you won the round! wow you're so cool`
    } else {
        NaN;
    }

    if(computerScore === 1) {
        document.getElementById("computerTally").src = "assets/pictures/tally1.PNG";
    } else if(computerScore === 2) {
        document.getElementById("computerTally").src = "assets/pictures/tally2.PNG";
    } else if(computerScore === 3) {
        document.getElementById("computerTally").src = "assets/pictures/tally3.PNG";
    } else if(computerScore === 4) {
        document.getElementById("computerTally").src = "assets/pictures/tally4.PNG";
    } else if(computerScore === 5) {
        document.getElementById("computerTally").src = "assets/pictures/tally5.PNG";
        document.getElementById("whoWon").textContent = `computer won the round! womp womp`
    } else {
        NaN;
    }
}