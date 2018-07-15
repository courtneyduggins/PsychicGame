// define variable for userGuess, computerChoice, wins, losses & # of guessesRemaining

// set wins and loss equal to starting count, 0
// set guessesRemaining equal to starting number, 9

// var userGuess = [], x = 9;

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];


// Computer selects random letter, store computerChoice...


// Game beings when user presses key....
// var guesses = document.getElementById("yourGuesses");
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerPick);

    var guesses = [];
        // guesses.push(userGuess);
        
    

    for (var i = 0; i < 9; i++) {
        
        guesses.push(userGuess);
        console.log(guesses);
    }
    

    for (var j = 0; j<guesses.length; j++){
        // System.out.print(guesses[i]);

        if (userGuess === computerPick) {
            wins++;
        }
        else {
            losses++;
            guessesLeft--;
        }
}

        
    

    var html =

        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft+ "</p>" +
        "<p>Your guesses so far: " + guesses[j] + "</p>";
        
    
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;


}





    // while (userGuess.length < x) {
    //     userGuess.push(guesses);
    // }
    // console.log(userGuess);

    // for (var i = 0; i < userGuess.length; i++) {

    //     var html =
    //       "<p>Your guesses so far: " + userGuess[i] + "</p>";
    //   "<p>The computer chose: " + computerGuess + "</p>" +
    //   "<p>wins: " + wins + "</p>" +
    //   "<p>losses: " + losses + "</p>" +
    //   "<p>ties: " + ties + "</p>";

    // }


    // var userGuess1 = document.getElementById("yourGuesses");
    // userGuess1.appendChild(userGuess);







// display userGuess next to "Your guesses so far"...

// determine if key pressed matches computerChoice...



// if userGuess matches computer choice, increase wins by 1 ...

// restart game...

//if userGuess does not match computerChoice, increase losses by 1 and decrease GuessesLeft by 1...

// repeat userGuess selection process until UserGuess matches computerChoice or GuessLeft reaches 0..

// restart game when userGuess matches computerChoice or GuessesLeft reaches 0...