"use strict"
//to access the item for an object call the array and key name instead of the index#

// Declare our Quiz Questions Object

var quizQuestions = [{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
},
{
    Question: "How many sqft in an Home",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
},
{
    Question: "How many sqft in an Boat",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
},
{
    Question: "How many sqft in an Car",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
}
];

// start the quiz and display the questions
var displayQuestion = function () {
    "use strict";
    var score = 0;
    var questionNumber = 1;
    //var outputQuizQuestion = document.getElementById("quizQuestion");

    //if (questionNumber === quizQuestions.length) {
    //    quizQuestions.innerHTML = ("You finished the quiz! You scored " + score + " points!");

    //} else {
    //    for (var i = 1; i < quizQuestions.length + 1; i++) {
    //        i = questionNumber;
    //quizQuestion.innerHTML = quizQuestion[questionNumber].Question;
    //outQuizQuestion.innerHTML = quizQuestion.innerHTML + quizQuestion[1].Question;
    document.getElementById("quizQuestion").innerHTML = quizQuestions[1].Question;
    //document.getElementById("quizQuestion").innerHTML = "This is a test";

    //    }
    //}
    // quizQuestion.innerHTML = quizQuestions[1];
};

alert(quizQuestions[3].Question);
//quizQuestion.innerHTML = quizQuestion.innerHTML + quizQuestion[1].Question;
displayQuestion();
