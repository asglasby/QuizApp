"use strict"
//to access the item for an object call the array and key name instead of the index#

// Declare our Quiz Questions Object
var myAnswer;
var score = 0;
var questionNumber = 0;
//var yourAnswer = "incorrect";

var quizQuestions = [{
    Question: "How many sqft in an acre?",
    answerChoice: [43500, 42500, 48600, 43560],
    answer: 43560
},
{
    Question: "How Many Fingers do Most People Have?",
    answerChoice: [5, 2, 3, 6],
    answer: 5
},
{
    Question: "What are the colors in the american flag?",
    answerChoice: ["Red, White, and Blue", "Pink, Orange, and Green", "Yellow, Teal, and White", "Red, White, and Black"],
    answer: "Red, White, and Blue"
},
{
    Question: "How many types of chees are there?",
    answerChoice: [10, 5, 20, "none of these answers"],
    answer: "none of these answers"
}
];

// start the quiz and display the questions from Javascript.
var completeQuiz = function () {
    document.getElementById("buttonHolder").innerHTML = "";
    questionNumber = -1;
    document.getElementById("quizQuestion").innerHTML = ("You've completed the quiz! You scored " + score + " points!");
    document.getElementById("startAgain").innerHTML = '<p><button onclick="reloadQuiz();" type="button" class="btn">'
        + "Click Here to Retake the Quiz" + '</button></p>';
}

var reloadQuiz = function () {
    document.location.reload(true);
}

var displayQuestion = function () {
    "use strict";
    if (questionNumber === quizQuestions.length) {
        completeQuiz();
        questionNumber = -1;
    } else {
        document.getElementById("startAgain").innerHTML = "";
        myAnswer = quizQuestions[questionNumber].answer;
        document.getElementById("quizQuestion").innerHTML = '<p>' + quizQuestions[questionNumber].Question + '</p><br>'
              + '<span id="a" onclick="answer1Clicked();">' + quizQuestions[questionNumber].answerChoice[0] + '</span><br>'
              + '<span id="b" onclick="answer2Clicked();">' + quizQuestions[questionNumber].answerChoice[1] + '</span><br>'
              + '<span id="c" onclick="answer3Clicked();">' + quizQuestions[questionNumber].answerChoice[2] + '</span><br>'
              + '<span id="d" onclick="answer4Clicked();">' + quizQuestions[questionNumber].answerChoice[3] + '</span><br>';
    }
   // alert(myAnswer)
    questionNumber = questionNumber + 1;
};

// The answerClicked functions validates the answers that the user clicked on the html page 
var answer1Clicked = function () {
    "use strict";
    var answerClickedCounter = 1;

    if (answerClickedCounter > 1) {
        alert("Sorry, You have already chosen an answer, Please click next to continue");
    } else {
        if (document.getElementById("a").textContent == myAnswer) {
            alert("Correct!");
            score++;
        } else {
            alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
        }
        alert("The current score is: " + score);
        answerClickedCounter = answerClickedCounter + 1;
    }
};

var answer2Clicked = function () {
    "use strict";

    if (document.getElementById("b").textContent == myAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
    }
    
    alert("The current score is: " + score);
    
};

var answer3Clicked = function () {
    "use strict";
    if (document.getElementById("c").textContent == myAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
    }
    alert("The current score is: " + score);
};

var answer4Clicked = function () {
    "use strict";
    if (document.getElementById("d").textContent == myAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
    }
    alert("The current score is: " + score);
};
