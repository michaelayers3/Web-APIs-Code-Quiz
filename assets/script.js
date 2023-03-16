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
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        gameOverPage.classList.remove("hide");
        questionPage.classList.add("hide");
        timeContainer.classList.add("hide");
    
    }
    }, 1000);
}

//button to start game
var startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", function() {
    setTime();
});

//pages that appear and disappear
var startPage = document.querySelector("#start-container");
var questionPage = document.querySelector("#question-container");
var gameOverPage = document.querySelector("#game-over-container");
var timeContainer = document.querySelector("#time-container");

startButton.addEventListener("click", function() {
    startPage.classList.add("hide");
    timeContainer.classList.remove("hide");
    questionPage.classList.remove("hide");
});

//answers to questions that interact with the timer
var wronganswerButton = document.querySelector("#wrong-answer-btn");
wronganswerButton.addEventListener("click", function() {
        secondsLeft = secondsLeft - 10;
       
    });

