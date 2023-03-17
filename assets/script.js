//Timer
//button to start game
//pages that appear and disappear
//answers to questions that interact with the timer
//score that is saved to local storage
//high score page
//button to play again

//Timer
var timeEl = document.querySelector("#time");
var secondsStart = 100;

function setTime() {

    var timerInterval = setInterval(function() {
        secondsStart--;
        timeEl.textContent = secondsStart;
    if(secondsStart <= 0) {
        // clearInterval(timerInterval);
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
    question1Page.classList.remove("hide");
});

// // //each button will take you to the next question
var question1Page = document.querySelector("#q1-container");
var question2Page = document.querySelector("#q2-container");
var question3Page = document.querySelector("#q3-container");
var question4Page = document.querySelector("#q4-container");





//answers to questions that interact with the timer
var wronganswerButton = document.querySelector("#wrong-answer-btn");
wronganswerButton.addEventListener("click", function() {
        secondsStart = secondsStart - 10;
    });

//score that is saved to local storage

//user puts in initials
//user clicks submit
//user initials are saved to local storage
//user initials are displayed in high score container

var highScoreContainer = document.querySelector("#high-score-container");
var submitButton = document.querySelector("#submit-btn");
var highScores = document.querySelector("#high-scores");
var initialsInput = document.querySelector("#initials");

function renderHighScores() {
    var li = document.createElement("li");
    li.textContent = initials;
    li.setAttribute("data-index", i);
    highScoreContainer.appendChild(li);
}


submitButton.addEventListener("click", function() {
    var initials = initialsInput.value
    //add if no initials are entered
     localStorage.setItem("initials", initials)
     displayHighScores();
});


function displayHighScores() {
    var initials = localStorage.getItem("initials");
    highScores.textContent = initials;
}

displayHighScores();


// var score = secondsLeft;
// var scoreEl = document.querySelector("#score");
// scoreEl.textContent = score;
//     function saveScore() {
//         localStorage.setItem("score", score);
//     }

//high score page
//button to play again
    var playAgainButton = document.querySelector("#play-again-btn");
    playAgainButton.addEventListener("click", function() {
        location.reload();
    });