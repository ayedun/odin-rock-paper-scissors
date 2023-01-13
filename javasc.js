

function playRound(playerChoice, computerChoice) {

}
function getPlayerChoice(i) {
    let playerinput = prompt(`Please enter your selection below for round ${i}`);
    playerinput = playerinput.toLowerCase();
    switch(playerinput) {
        case 'rock':
            return myArray[0];
        case 'paper':
            return myArray[1];
        case 'scissors':
        case 'scissor':
            return myArray[2];      
        default:
            console.log("Sorry I did not understand your choice")
            
    }



}

function round(playerChoice, computerChoice)  {
    if (playerChoice== computerChoice) {
        console.log("This was a tie! No one gets a point.")
        return "none";
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log(`Player chose ${[playerChoice]}, and opponent chose ${computerChoice}.
        Therefore, opponent wins!`)
        return "opponent";
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`Player chose ${[playerChoice]}, and opponent chose ${computerChoice}.
        Therefore, player wins!`)

        return "player";
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`Player chose ${[playerChoice]}, and opponent chose ${computerChoice}.
        Therefore, opponent wins!`)
        return "opponent";
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log(`Player chose ${[playerChoice]}, and opponent chose ${computerChoice}.
        Therefore, player wins!`)
        return "player";
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`Player chose ${[playerChoice]}, and opponent chose ${computerChoice}.
        Therefore, opponent wins!`)
        return "opponent";
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`Player chose ${[playerChoice]}, and opponent chose ${computerChoice}.
        Therefore, player wins!`)
        return "player";
    }

}

function game() {
    let playerWins = 0;
    let opponentWins = 0;
    for(let i=1; i<=5;++i) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice(i);
    winner = round(playerChoice, computerChoice);
    if (winner == "player"){
        playerWins++;
    }
    if (winner == "opponent"){
        opponentWins++;
    }
    console.log(`Player has ${playerWins} wins so far, while opponent has ${opponentWins} wins so far.`)

    }
    console.log(`Player won a total of ${playerWins} times, while opponent won a total of ${opponentWins} times.`)
}



function getComputerChoice() {
    return myArray [Math.floor(Math.random()*myArray.length)];
}


let myArray = ["rock", "paper", "scissors"]
let computerChoice;
let playerChoice;
let winner;

game();