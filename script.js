const user = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput
    } else{
        console.log('Error! Choose rock, paper, or scissors.')
    }
};

function comp() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
};

function winner(user, comp) {
    if(user === comp){
        return 'tie!';
    } 
    if(user === 'rock'){
        if(comp === 'paper'){
            return 'computer won!'
        } else{
            return 'you won!'
        }
    } 
    if(user === 'paper'){
        if(comp === 'scissors'){
            return 'computer won!'
        } else{
            return 'you won!'
        }
    }
    if(user === 'scissors'){
        if(comp === 'rock'){
            return 'computer won!'
        } else{
            return 'you won!'
        }
    }
} 

function play(userChoice, compChoice) {
    if(userChoice === compChoice){
        return 'tie!';
    }
    else if(
        userChoice === 'rock' && compChoice === 'paper' ||
        userChoice === 'paper' && compChoice === 'scissors'||
        userChoice === 'scissors' && compChoice === 'rock'){
            return 'computer won!'
        }
    else if(
        userChoice === 'rock' && compChoice === 'scissors' ||
        userChoice === 'paper' && compChoice === 'rock' ||
        userChoice === 'scissors' && compChoice === 'paper'){
            return 'you won!'
        }
};

play();