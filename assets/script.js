//Timer
//button to start game
//pages that appear and disappear
//answers to questions that interact with the timer
//score that is saved to local storage
//high score page
//button to play again

//Timer
var timeEl = document.querySelector("#time");
var secondsLeft = 100;

function setTime() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        //Send the user to the game over page//
    }
    }, 1000);
}

//button to start game
var startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", function() {
    setTime();
});

//pages that appear and disappear
var startPage = document.querySelector("#start-page");
var questionPage = document.querySelector("#question-page");
var gameOverPage = document.querySelector("#game-over-page");

startButton.addEventListener("click", function() {
    startPage.classList.add("hide");
    questionPage.classList.remove("hide");
});