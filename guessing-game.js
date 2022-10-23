const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const seceretNumber = 5;

const checkGuess = (guess) => {
    if (guess > seceretNumber){
        console.log("Too high!");
        return false;
    } else if (guess < seceretNumber){
        console.log("Too low!");
        return false;
    } else if (guess === seceretNumber){
        console.log("You did it bud!");
        return true;
    }
};

const askGuess = rl.question("Enter a guess! ", (answer) => {
        console.log(checkGuess(Number(answer)));
    rl.close();
});
