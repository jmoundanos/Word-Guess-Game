var wordsToGuess = ['walk', 'trot', 'canter', 'gallop', 'lope', 'halt', 
                'saddle', 'bridle', 'bit', 'dressage', 'hunter', 'jumper',
                'english', 'western', 'tack', 'jog', 'eventing', 'neigh',
                'nicker', 'hoof', 'mane', 'tail', 'forelock', 'whinny', 'halter']

var wins = 0;
var guessCounter = 15;
var randomWord = "";
var letterArray = [];
var spaces = [];
var spacesAndCorrectLetter = [];
var wrongLetter = [];

function startGame(){ 
    reset();
document.onkeyup = function(){
    //select random word
    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    letterArray = randomWord.split("");
    spaces = letterArray.length;
    //fill array with underscores based on length of word
    for(var i = 0; i < spaces; i++){
        spacesAndCorrectLetter.push("_");
        }
    document.getElementById("wordToGuess").innerHTML = "  " + spacesAndCorrectLetter.join(" ");
    console.log(randomWord);
    playGame();
}}
function playGame(){
document.onkeyup = function(event){
    var letterGuess = event.key;
    var letter = false;
    for(var j = 0; j < spaces; j++){
        if(randomWord[j] == letterGuess){
            letter = true;
        }
    }
    if(letter){
        for(var k = 0; k < spaces; k++){
            if(randomWord[k] == letterGuess){
                spacesAndCorrectLetter[k] = letterGuess;
                guessCounter--;
                document.getElementById("wordToGuess").innerHTML = spacesAndCorrectLetter.join("");
                document.getElementById("guessesRemaining").innerHTML = guessCounter;
            }
        }

    }else{
        wrongLetter.push(letterGuess);
        document.getElementById("guessedLetters").innerHTML = wrongLetter.join("");
        guessCounter--;
        document.getElementById("guessesRemaining").innerHTML = guessCounter;
     }

    if(letterArray.toString() == spacesAndCorrectLetter.toString()){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("congrats").innerHTML = "You win!";
        startGame();
    }
    if(guessCounter === 0){
        document.getElementById("congrats").innerHTML = "You lose";
        startGame();
    }
}
}
startGame();

function reset(){
   letterArray = [];
   spacesAndCorrectLetter = [];
   guessCounter = 15; 
   wrongLetter = [];
  // document.getElementById("congrats").innerHTML = " ";
}