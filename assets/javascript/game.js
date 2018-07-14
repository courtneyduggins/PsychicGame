// define variable for userGuess, computerChoice, wins, losses & # of guessesRemaining

// set wins and loss equal to starting count, 0
// set guessesRemaining equal to starting number, 9

var userGuess = event.key;
var winsCounter = 0;
var lossesCounter = 0;
var guessesLeft  = 9;



// Computer selects random letter, store computerChoice...
computerChoice = new Random();
(char) (computerChoice.nextInt(26) + 'a');


// Game beings when user presses key....
var guesses = document.getElementById("yourGuesses");
document.onkeyup = function (event) {
guesses.append(userGuess);

    // var userGuess1 = document.getElementById("yourGuesses");
    // userGuess1.appendChild(userGuess);



}



// display userGuess next to "Your guesses so far"...

// determine if key pressed matches computerChoice...



// if userGuess matches computer choice, increase wins by 1 ...

// restart game...

//if userGuess does not match computerChoice, increase losses by 1 and decrease GuessesLeft by 1...

// repeat userGuess selection process until UserGuess matches computerChoice or GuessLeft reaches 0..

// restart game when userGuess matches computerChoice or GuessesLeft reaches 0...