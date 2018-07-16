// Pseudocode for game
// 1. Define variable for userGuess, computerChoice, wins, losses & number of guessesLeft...

// 2. Set wins and losses equal to starting count, 0...
//    Set guessesRemaining equal to starting number, 9...
//    Define computer choices (array)...  

// 3.  Computer selects random letter from array....
// 4.  User selects a key to make a guess...
// 5. If userGuess matches ComputerChoice, increase wins by 1 and restart game (Computer makes new selection...)...
// 6. If userGuess does not match ComputerChoice, display userGuess, decrease guessesLeft by 1
// 7. Repeat .6 until guessesLeft = 0
// If guessesLeft = 0, increase losses by 1 and restart game

// Now begin coding....

// 1.Define variables for userGuess, computerChoice, wins, losses & numner of guessesLeft
// 2. Set wind and losses equal to starting count, 0
//    Set guessesLeft equal to starting number, 9
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];

// var userGuess = event.key.toLowerCase();

// Computer selects random letter, store as computerPick...

generateComputerGuess = function () {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

var computerPick = generateComputerGuess();
console.log("computerPick: " + computerPick);
// var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// document.onkeyup = function (event) {

//  var userGuess = event.key;



//user selets letter to guess the computer's pick... 


// (guessesLeft = 0 || userGuess = computerPick)

for (var i = 0; i < 9; i++) {

    

    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log("userGuess: " + userGuess);


        // var computerAnswer = computerPick;

        if (userGuess === computerPick) {
            wins++;
            console.log("wins: " + wins);
            // break;


            // restart game...computer makes are new random selection...
        
        }


        else if ((userGuess !== computerPick) && (guessesLeft > 0)) {
            // return

            guessesLeft--;
            console.log("gusess left: " + guessesLeft);
            guesses.push(userGuess);
            console.log("guesses: " + guesses[i]);

            // var trackGuesses = document.getElementById ("keysGuessed") 
            // trackGuesses.textContent = "Your guesses so far:" + guesses[i];



            // document.write(userGuess);
            // guesses.push(userGuess[i]);
            // display userGuess next to "You're guesses so far: "
            // user makes another selection and repeat until either userGuess = computerpick or guesses remaining = 0;
        }
        else if ((userGuess !== computerPick) && (guessesLeft = 0)) {
            
            losses--;
            consol.log("losses: " + losses);

        }
        // else if (userGuess === computerPick){
        //     wins++;
        // }


        var html =
            "<h1>The Psychic Game</h1" > +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Your guesses so far: " + guesses[i] + "</p>";


        document.querySelector("#game").innerHTML = html;



    };
}


    // }



// };

// Game beings when user presses key....
// var guesses = document.getElementById("yourGuesses");

// for (var i = 0; i < 9; i++) {
//     document.onkeyup = function (event) {
//         var userGuess = event.key.toLowerCase();
//         console.log(computerPick);


//         // guesses.push(userGuess);



//         // for (var i = 0; i < 9; i++) {
//         //     // var guesses = [];
//         //     // guesses.push(userGuess);
//         //     //     console.log(guesses);
//         //     // document.getElementById("userGuessed");
//         //     document.onkeyup = function(event) {
//         //     userGuessed.textcontent = "<p>Your guesses so far: " + event.key + "</p>";
//         // }


//         // }


//         // for (var j = 0; j<guesses.length; j++){
//         // System.out.print(guesses[i]);


//         if (userGuess === computerPick) {
//             wins++;


//         }
//         else if (userGuess !== computerPick) {
//             guessesLeft--;

//         }

//         // }




//         var html =

//             "<h1>The Psychic Game</h1>" +
//             "<p>Guess what letter I'm thinking of!</p>" +
//             "<p>Wins: " + wins + "</p>" +
//             "<p>Losses: " + losses + "</p>" +
//             "<p>Guesses left: " + guessesLeft + "</p>"
//         "<p>Your guesses so far: " + userGuess + "</p>";




//         // Set the inner HTML contents of the #game div to our html string
//         document.querySelector("#game").innerHTML = html;


//     }
// }




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







