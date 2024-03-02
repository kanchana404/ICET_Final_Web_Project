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
        // Generate a random number between 1 and 20
        randomNumber = Math.floor(Math.random() * 20) + 1;
        console.log("Random Number:", randomNumber);
    }

    const userGuess = parseInt(inputNum.value);

    remainingAttempts--;

    if (userGuess > 20) {
        alert("You can't use numbers above 20.");
        remainingAttempts++; // Increase remaining attempts since user entered an invalid number
    } else if (userGuess === randomNumber) {
        resultElement.textContent = "You win!";
        remainingAttempts = 0; // Reset remaining attempts
    } else if (userGuess > randomNumber) {
        resultElement.textContent = "The needed one is smaller. Remaining attempts: " + remainingAttempts;
    } else if (userGuess < randomNumber) {
        resultElement.textContent = "The needed one is larger. Remaining attempts: " + remainingAttempts;
    }

    if (remainingAttempts === 0) {
        resultElement.textContent += " You have used all your attempts! The number was " + randomNumber + ".";
        setTimeout(function() {
            window.location.reload();
        }, 5000);
    }
    
}
