
//Define variables, arrays//
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = "";

//The onkeyup functions//
document.onkeyup = function (event) {
    //User hits the key, creates event//
    userGuess = event.key.toLowerCase();
    console.log(userGuess)
    //computer random generator//
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
    // if the userGuess is equal to the computerGuess, the user gets a point, the score is updated, and the game is reset//
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
    }
    //if the userGuess doesn't equal the computerGuess, the guessesLeft decreases by one, the wrong answers are listed//
    else {
        guessesLeft--;
        userGuesses = userGuesses + " " + userGuess;
    }
    //if the guesses left run out, need to add a loss and reset game//
    if (guessesLeft <= 0) {
        losses++;
        guessesLeft = 9;
        userGuesses = "";
    }
    //Updating the Scoreboard//
    var winsText = document.getElementById("wins");
        winsText.textContent = "Wins: " + wins;
    var lossesText = document.getElementById("losses");
        lossesText.textContent = "Losses: " + losses;
    var guessesLeftText = document.getElementById("guessesLeft");
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    var userGuessesText = document.getElementById("userGuesses");
        userGuessesText.textContent = "Guesses so Far: " + userGuesses;
};

