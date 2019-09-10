
//define variables, arrays//
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
// var guessFar = [];
var userGuesses = "";

//onkeyup functions//
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess)
    //computer random generator//
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
    // if the userGuess is equal to the computerGuess, the user gets a point, the score is updated, and the game is reset//
    if (userGuess === computerGuess) {
        wins++;
        guessLeft = 9;
    }
    //if the userGuess doesn't equal the computerGuess, the guessesLeft decreases by one, the guessesLeft score is updates, the wrong answers are listed//
    else {
        guessLeft--;
        userGuesses = userGuesses + " " + userGuess;
    }
    //if the guesses left run out, need to add a loss, update the score and reset game//
    if (guessLeft <= 0) {
        losses++;
        guessLeft = 9;
        userGuesses = "";
    }
    //DEFINITIONS//
    var winsText = document.getElementById("wins");
        winsText.textContent = "Wins: " + wins;
    var lossesText = document.getElementById("losses");
        lossesText.textContent = "Losses: " + losses;
    var guessesLeftText = document.getElementById("guessesLeft");
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    var userGuessesText = document.getElementById("userGuesses");
        userGuessesText.textContent = "Guesses so Far: " + userGuesses;
};

