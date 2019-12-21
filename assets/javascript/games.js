
var wordsToGuess = ['walk', 'trot', 'canter', 'gallop', 'lope', 'halt', 
                'saddle', 'bridle', 'bit', 'dressage', 'hunter', 'jumper',
                'english', 'western', 'tack', 'jog', 'eventing', 'neigh',
                'nicker', 'hoof', 'mane', 'tail', 'forelock', 'whinny', 'halter']
var lettersGuessed = [];
var wins = 0;
var guessCounter = 0;
var playAgain = false;
var randomWord = "";
var wordLength = [];
    
//start game
    document.onkeyup = function(){
        //choose word from array 
    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    //fill array with underscores based on length of word
    for(var i = 0; i < randomWord.length; i++){
        wordLength[i] = "_";
        document.getElementById("wordToGuess").innerHTML = wordLength.join(" ");
    }
    //start game loop for number of guesses user is allowed
    if(guessCounter < 16){
        
    }
    }

