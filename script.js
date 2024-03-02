let randomNumber; 
let remainingAttempts = 3; 
const inputNum = document.getElementById('num');
const resultElement = document.getElementById('result');

function guess() {
    if (remainingAttempts === 0) {
        resultElement.textContent = "You have used all your attempts!";
        return;
    }

    if (!randomNumber) {
        randomNumber = Math.round(Math.random() * 100);
        console.log("Random Number:", randomNumber);
    }

    const userGuess = parseInt(inputNum.value);

    remainingAttempts--;

    if (userGuess === randomNumber) {
        resultElement.textContent = "You win!";
        remainingAttempts = 0; // Reset remaining attempts
    } else if (userGuess > randomNumber) {
        resultElement.textContent = "The needed one is smaller. Remaining attempts: " + remainingAttempts;
    } else if (userGuess < randomNumber) {
        resultElement.textContent = "The needed one is larger. Remaining attempts: " + remainingAttempts;
        
    }

    if (remainingAttempts === 0) {
        resultElement.textContent += " You have used all your attempts!";
        setTimeout(function() {
            window.location.reload();
        }, 3000);
    }
}
