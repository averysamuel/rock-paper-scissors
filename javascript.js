//initialize variables
let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

function computerPlay(){
    let computerMove = Math.floor(Math.random()*3);
    if(computerMove === 0) {
        return "rock";
    } else if (computerMove === 1){
        return "paper";
    }
    return "scissors";

}
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "Tie Game!"
    }
    if  (playerSelection === 'rock'&& computerSelection === 'paper' ||
         playerSelection ==='paper' && computerSelection === 'scissors' ||
         playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return `You've lost the round, ${computerSelection} beats ${playerSelection}`;
 
    }

    if ((computerSelection === 'rock'&& playerSelection === 'paper')||
        (computerSelection ==='paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')) {
            playerScore++;
            return `You've won the round! ${playerSelection} beats ${computerSelection}`;;
    }
}

//initialize HTML variables
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const results = document.createElement('div');
const winner = document.createElement('h2');
body.appendChild(results);
buttons.forEach(button => button.addEventListener('click',runGame));

function runGame(){
    if(document.contains(winner)){
        body.removeChild(winner);
    }
    const playerSelection = this.className;
    const computerSelection = computerPlay();
    results.textContent = playRound(playerSelection,computerSelection ); 
    gameCounter++;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("game-counter").textContent = gameCounter; 
    document.getElementById("computer-selection").textContent = computerSelection; 
    
    if(gameCounter===5){
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("game-counter").itextContent = gameCounter;  
        endGame()};
}


function endGame(){
    body.appendChild(winner);
    if(computerScore === playerScore){
        winner.textContent = ('T\'was a tie - have another go at it')
    }else if(computerScore < playerScore){
        winner.textContent = ('Congratulations, you WON! ...this time...')
    }else {winner.textContent = ('Seems like you\'ve been defeated, try again!')}  
    gameCounter = 0;
    playerScore = 0;
    computerScore = 0;
}


