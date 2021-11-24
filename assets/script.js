// Target HTML elements 

var startQuizDiv = document.getElementById("start-page");
var quizBody = document.getElementById("quiz-start");
var quizTimer = document.getElementById("timer");
var quizQuestions = document.getElementById("questions");
var answerOptions = document.getElementById("answer-options");
var answerResult = document.getElementById("answer-result");
var resultBox = document.getElementById("results-box");
var finalScore = document.getElementById("score");
var questionText = document.getElementById("question-text");

// Buttons
var startBtn = document.getElementById("start-btn");
var buttonRestart = document.getElementById("restart");
var buttonQuit = document.getElementById("quit");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


// Quiz questions object array
var quizQuestions = [
    {
        question: "Placeholder question?",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "c"
    }
];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 100;
var timerInterval;
var score = 0;
var correct;

// Hide div elements until start button click
window.onload = function() {
    startQuizDiv.style.display = "block";
    quizBody.style.display = "none";
    resultBox.style.display = "none";
}

// If start button clicked
function startQuiz() {
    quizBody.style.display = "block";
    startQuizDiv.style.display = "none";
    resultBox.style.display = "none";
    generateQuizQuestions();

// Timer 
    timerInterval = setInterval(function() {
        timeLeft--; 
        quizTimer.textContent = "Remaining Time: " + timeLeft;

        if(timeLeft === 0) {
         clearInterval(timerInterval);
            showScore();
        }
    }, 1000); 
}

// Function to cycle through questions object array
function generateQuizQuestions() {
    startQuizDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}

// Check user responses 
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
    // If Correct
        if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
            score += 10;
            alert('Correct'); 
            currentQuestionIndex++;
            generateQuizQuestions();
        }
        // If Incorrect
        else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
            alert('Incorrect')
            timeLeft -= 10;
            currentQuestionIndex++;
            generateQuizQuestions();
        }
} 

function showScore() {
    startQuizDiv.style.display = "none";
    quizBody.style.display = "none";
    resultBox.style.display = "block";
    // clear timer and display final score
    clearInterval(timerInterval);
    finalScore.innerHTML = "Final Score: " + score;
}