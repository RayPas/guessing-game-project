const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let numAttempts = 0;
// Function to select a random number in a range
const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

// Function to return a boolean on whether the guess is true
const checkGuess = (guess, seceretNumber) => {
    if (guess > seceretNumber){
        console.log("too high")
        return false;
    } else if (guess < seceretNumber){
        console.log("too low")
        return false;
    } else if (guess === seceretNumber){
        return true;
    }
};

const askLimit = () => {
    rl.question("How many guesses do you want? ", (guess) => {
        numAttempts = Number(guess);
        askForRange();
    })
}

const askGuess = function (num) {
    // Assign a variable to hold the number from the range.

    rl.question("Enter a guess! ", (answer) => {

        if (numAttempts !== 1){
            if(checkGuess(Number(answer), num) === true){
                console.log("You win!");
            } else {
                numAttempts--
                return askGuess(num);
            }
        } else {
            console.log("Out of guesses!")
        }
        rl.close();
    });
};

// Create a function that asks for a range of 2 and then close over the secret number
const askForRange = () => {
    rl.question ("Enter a low number! ", (min) => {
        rl.question("Enter a high number! ", (max) => {
            console.log(`I'm thinking of a number between ${min} and ${max}`)
            const num = randomNumber(Number(min), Number(max));
            askGuess(num);
        })
    })
};

askLimit();
