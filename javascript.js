function computerPlay(){
    let computerMove = Math.floor(Math.random()*3);
    if(computerMove === 0) {
        return "Rock";
    } else if (computerMove === 1){
        return "Paper";
    }
    return "Scissors";

}

function playRound(playSelection,computerSelection){
    switch(playSelection){
        
        case "rock":
            if(computerSelection == "Paper"){
                console.log("You Lose! Paper beats Rock")
                return -1;
        
            }else if(computerSelection == "Scissors"){
                console.log( "You Win! Rock beats Scissors")
                return 1;
            }else {
                console.log("It's a tie")
                return 0;
            }
        case "scissors":
            if(computerSelection == "Paper"){
                console.log( "You Win! Scissors beats Rock")
                return 1
            }else if(computerSelection == "Rock"){
                console.log("You Lose! Rock beats Scissors")
                return -1
            }else{
                console.log("It's a tie")
                return 0;
            }
        
        case "paper":
            if(computerSelection == "Rock"){
                console.log("You Win! Paper beats Rock")
                return 1
            }else if(computerSelection == "Scissors"){
                console.log("You Lose! Scissors beats Paper")
                return -1
            }else{
                console.log("It's a tie")
                return 0;
            }
        }
    }
    function game(){
        let counter =0;
        let userInput;
        for(let i=0;i<5;i++){
            userInput = prompt("Enter your move!")
            counter += playRound(userInput.toLowerCase(),computerPlay()); 
        }
        return (counter<3)?"You Lose":"You Win!";
    }