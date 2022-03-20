const choices = ['rock', 'paper', 'scissors']

function game() {
    play()
};

function playRound() {
    const userSelection = user;
    const compSelection = comp;
}

function user() {
    let userInput = prompt('Type rock, paper, or scissors')
    while (input == null){
        input = prompt('Error! Choose rock, paper, or scissors.')
    }
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput
    } else{
       console.log('Error! Choose rock, paper, or scissors.')
    }
};

function comp() {
    return choices[Math.floor(Math.random()*3)]
};

function play(userSelection, compSelection) {
    if(userSelection === compSelection){
        return 'tie!';
    } 
    else if(
        (userSelection === 'rock' && compSelection === 'paper') || 
        (userSelection === 'paper' && compSelection === 'scissors') || 
        (userSelection === 'scissors' && compSelection === 'rock')){
           return 'you lost!'
    } else{
        return 'you won!'
    }
} 

play();
