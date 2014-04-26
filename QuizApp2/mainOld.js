"use strict"
//to access the item for an object call the array and key name instead of the index#

// Declare our Quiz Questions Object

var quizQuestions = [{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
},
{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
},
{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
},
{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 4,
}
];

// start the quiz and display the questions
var displayQuestion = function () {
    "use strict";
    var score = 0;
    var questionNumber = 0;

    //use a counter to grab each question until the end of file
    //(for in quizQuestions) {
    var showQuestion = document.getElementById("quizQuestion").innerHTML;
    showQuestion = '<p>' + quizQuestions[1].Question + '</p><br>';
    //showQuestion.innerHTML = '<p>' + quizQuestions[1].Question + '</p><br>';
    //document.getElementById("quizQuestion").innerHTML = quizQuestions[1].Question;
    ////loop to display Question answers
    // for (var i = 0; i < quizQuestions.length; i++) {
    //     showQuestion.innerHTML = '<p>' + quizQuestions[i].Question + '</p><br>'
    //+ '<span id="a" onclick="answerClicked">' + quizQuestions[i].Question[0] + '</span><br>'
    //+ '<span id="b" onclick="answerClicked">' + quizQuestions[i].Question[1] + '</span><br>'
    //+ '<span id="c" onclick="answerClicked">' + quizQuestions[i].Question[2] + '</span><br>'
    //+ '<span id="d" onclick="answerClicked">' + quizQuestions[i].Question[3] + '</span><br>';
    // }

    //        //}
    //    //}



    //if (questionNumber === quizQuestions.length) {
    //    quizQuestion.innerHTML = ("You finished the quiz! You scored " + score + " points!");

    //} else {
    //    question++;
    //    quizQuestion.innerHTML = quizQuestions[questionNumber].Question;  // display the question
    //    for (var i = 0; i < quizQuestions.length + 1; i++) {
    //        i = questionNumber;
    //    }
    //}
    // quizQuestion.innerHTML = quizQuestions[1];
};

//var nextQuestion = function () {
//    "use strict
//    var correctAnswer = "c";
//    if (x === correctAnswer){
//        score++;
//        alert("Correct!");
//    } else {
//        alert("Thats incorrect, the correct answer is " + correctAnswer);
//    }

//};

//This function will process and get the answer

//var answerClicked = function () {
//    "use strict";


//    document.getElementById("span id");
//};


//this function will check to make sure an answer was selected for the question.
//var nothingClicked = function (quizQuestion) {
//    "use strict"
//    //quizQuestion
//    //function checkForLastName() { 
//    //    if (document.getElementById(" lastNameField"). value.length = = = 0) { 
//    //        alert(" Please enter your last name"); 
//    //    return false; 
//    //    }
//    //}

//    if (document.getElementById("quizQuestion").value === ""){
//        alert("please select an answer");
//        return false;
//    }

//};

displayQuestion();
//displayQuestion();
//alert(quizQuestions[1].Question);
//alert(quizQuestions);
//alert("test");