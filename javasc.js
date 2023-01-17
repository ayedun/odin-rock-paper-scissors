

function playRound(playerChoice, computerChoice) {

}
function getPlayerChoice(choice) {
    //let playerinput = prompt(`Please enter your selection below for round ${i}`);
    //playerinput = playerinput.toLowerCase();
    switch(choice) {
        case 'rock-button':
            //console.log("i hit rock");   
            return myArray[0];
        case 'paper-button':
            return myArray[1];
        case 'scissors-button':
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

function game(choice) {
   roundsPlayed++;
   // for(let i=1; i<=5;++i) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice(choice.target.id);
    winner = round(playerChoice, computerChoice);
    if (winner == "player"){
        playerWins++;
        playerScore.textContent = `Player score: ${playerWins}`;

    }
    if (winner == "opponent"){
        opponentWins++;
        opponentScore.textContent = `Opponent score: ${opponentWins}`;

    }
    console.log(`Player has ${playerWins} wins so far, while opponent has ${opponentWins} wins so far.`)
    if (roundsPlayed ==5) {
        console.log(`Player won a total of ${playerWins} times, while opponent won a total of ${opponentWins} times.`)
        playerWins = 0;
        opponentWins = 0;
        roundsPlayed = 0;
        playerScore.textContent = `Player score: ${playerWins}`;
        opponentScore.textContent = `Opponent score: ${opponentWins}`;
        console.log("This 5-round game has ended. Time to start over")

    }
}
//}



function getComputerChoice() {
    return myArray [Math.floor(Math.random()*myArray.length)];
}


let myArray = ["rock", "paper", "scissors"]
let container = document.querySelector('.container');
let computerChoice;
let playerChoice;
let winner;
let playerWins = 0;
let opponentWins = 0;
let roundsPlayed = 0;
let rockButton = document.getElementById("rock-button");
let paperButton = document.getElementById("paper-button");
let scissorsButton = document.getElementById("scissors-button");
let resultsDisplay = document.getElementById("results-display");
let playerScore = document.createElement('p');
playerScore.textContent = `Player score: ${playerWins}`;
let opponentScore = document.createElement('p');
opponentScore.textContent = `Opponent score: ${opponentWins}`;
container.appendChild(playerScore);
container.appendChild(opponentScore);



function test(choice){
    console.log(choice.target.id);
}

rockButton.addEventListener("click", game);
paperButton.addEventListener("click", game);
scissorsButton.addEventListener("click", game);



//game();