'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number';

document.querySelector('.number').textContent = '22';
document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = '100';
console.log(document.querySelector('.guess').value);

*/
let highScore = 0;
let sc = 20;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
    let secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.check').addEventListener('click',function(){
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);
        console.log(typeof guess);
        
        
        
        if(!guess){
            displayMessage('😡 no number!');
            // document.querySelector('.message').textContent = '😡 no number!';
        }else if(guess === secretNumber){
            displayMessage('🍕 Correct number');
            // document.querySelector('.message').textContent = '🍕 Correct number';
            
            document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';
        if(highScore < sc){
            highScore = sc;
            document.querySelector('.highscore').textContent = highScore;
            console.log(highScore);
        }
    }else if(guess!==secretNumber){
        displayMessage(guess < secretNumber ? '👇 Two low': '👆 Two high');
        // document.querySelector('.message').textContent = guess < secretNumber ? '👇 Two low': '👆 Two high';
        sc--;
        document.querySelector('.score').textContent = sc;
    }
    // else if(guess < secretNumber){
    //     document.querySelector('.message').textContent = '👇 Two low';
    //     sc -- ;
    //     document.querySelector('.score').textContent = sc;
    // }else{
    //     document.querySelector('.message').textContent = '👆 Two high';
    //     sc -- ;
    //     document.querySelector('.score').textContent = sc;
    // }
});

document.querySelector('.again').addEventListener('click',function(){
    sc = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = sc;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    // document.querySelector('.message').textContent = 'Start guessing...';
    // document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})