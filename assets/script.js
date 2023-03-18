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
var scoreEl = document.querySelector("#score");
var timerInterval;

// function setTime() {

//    var timerInterval= setInterval(function() {
//         secondsStart--;
//         timeEl.textContent = secondsStart;
//     }, 1000);

//     if(secondsStart <= 0) {
//         clearInterval(timerInterval);
//     }
// }

function setTime() {
     timerInterval = setInterval(function() {
        secondsStart--;
        timeEl.textContent = secondsStart;
    }, 1000);
}

function stopTime() {
    clearInterval(timerInterval);
   scoreEl.textContent = secondsStart;


}


//Stop time and record time




//pages that appear and disappear
var startButton = document.querySelector("#start-btn");
var startPage = document.querySelector("#start-container");
var questionPage = document.querySelector("#question-container");
var gameOverPage = document.querySelector("#game-over-container");
var timeContainer = document.querySelector("#time-container");

startButton.addEventListener("click", function() {
    setTime();
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
var rightanswerButton = document.querySelector("#right-answer-btn");


question1Page.addEventListener("click", function() {
    if (event.target.matches("#right-answer-btn")) {
        secondsStart = secondsStart + 10;
    }
    secondsStart = secondsStart - 10;
    question1Page.classList.add("hide");
    question2Page.classList.remove("hide");
});

question2Page.addEventListener("click", function() {
    if (event.target.matches("#right-answer-btn")) {
        secondsStart = secondsStart + 10;
    }
    secondsStart = secondsStart - 10;
    question2Page.classList.add("hide");
    question3Page.classList.remove("hide");
});

question3Page.addEventListener("click", function() {
    if (event.target.matches("#right-answer-btn")) {
        secondsStart = secondsStart + 10;
    }
    secondsStart = secondsStart - 10;
    question3Page.classList.add("hide");
    question4Page.classList.remove("hide");
});

question4Page.addEventListener("click", function() {
    if (event.target.matches("#right-answer-btn")) {
        secondsStart = secondsStart + 10;
       }
    secondsStart = secondsStart - 10;
    question4Page.classList.add("hide");
    gameOverPage.classList.remove("hide");
    questionPage.classList.add("hide");
    // timeContainer.classList.add("hide");
        stopTime();
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

displayHighScores();

submitButton.addEventListener("click", function() {
    var saveInfo = {
        initials: initialsInput.value,
        score: scoreEl.textContent
    }
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


//high score page
//button to play again
    var playAgainButton = document.querySelector("#play-again-btn");
    playAgainButton.addEventListener("click", function() {
        location.reload();
    });