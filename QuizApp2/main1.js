"use strict"
//to access the item for an object call the array and key name instead of the index#

// Declare our Quiz Questions Object
var myAnswer = "1";
var score = 0;
var questionNumber = 1;

var quizQuestions = [{
    Question: "How many sqft in an acre",
    answerChoice: [43500, 42500, 48600, 43560],
    answer: 43560
},
{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 43560,
},
{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 43560,
},
{
    Question: "How many sqft in an acre",
    answerChoice: ["43500", 42500, 48600, 43560],
    answer: 43560,
}
];

// start the quiz and display the questions
var displayQuestion = function () {
    "use strict";
    
    
    //use a counter to grab each question until the end of file
    //(for in quizQuestions) {
    
    ////loop to display Question and answers answers
    //for (var i = 0; i < quizQuestions.length; i++) {
    //    myAnswer = quizQuestions[i].answer;
    //        document.getElementById("quizQuestion").innerHTML = '<p>' + quizQuestions[i].Question + '</p><br>'
    //      + '<span id="a" onclick="answer1Clicked();">' + quizQuestions[i].answerChoice[0] + '</span><br>'
    //      + '<span id="b" onclick="answer2Clicked();">' + quizQuestions[i].answerChoice[1] + '</span><br>'
    //      + '<span id="c" onclick="answer3Clicked();">' + quizQuestions[i].answerChoice[2] + '</span><br>'
    //      + '<span id="d" onclick="answer4Clicked();">' + quizQuestions[i].answerChoice[3] + '</span><br>';
    //}

    //while (questionNumber < quizQuestions.length) {
    //            document.getElementById("quizQuestion").innerHTML = '<p>' + quizQuestions[questionNumber].Question + '</p><br>'
    //          + '<span id="a" onclick="answer1Clicked();">' + quizQuestions[questionNumber].answerChoice[0] + '</span><br>'
    //          + '<span id="b" onclick="answer2Clicked();">' + quizQuestions[questionNumber].answerChoice[1] + '</span><br>'
    //          + '<span id="c" onclick="answer3Clicked();">' + quizQuestions[questionNumber].answerChoice[2] + '</span><br>'
    //          + '<span id="d" onclick="answer4Clicked();">' + quizQuestions[questionNumber].answerChoice[3] + '</span><br>';
    //}

    

    if (questionNumber == quizQuestions.length) {
        quizQuestion.innerHTML = ("You finished the quiz! You scored " + score + " points!");

    } else {
        myAnswer = quizQuestions[questionNumber].answer;
        //    quizQuestion.innerHTML = quizQuestions[questionNumber].Question;  // display the question
        document.getElementById("quizQuestion").innerHTML = '<p>' + quizQuestions[questionNumber].Question + '</p><br>'
                  + '<span id="a" onclick="answer1Clicked();">' + quizQuestions[questionNumber].answerChoice[0] + '</span><br>'
                  + '<span id="b" onclick="answer2Clicked();">' + quizQuestions[questionNumber].answerChoice[1] + '</span><br>'
                  + '<span id="c" onclick="answer3Clicked();">' + quizQuestions[questionNumber].answerChoice[2] + '</span><br>'
                  + '<span id="d" onclick="answer4Clicked();">' + quizQuestions[questionNumber].answerChoice[3] + '</span><br>';
    }
    //    for (var i = 0; i < quizQuestions.length + 1; i++) {
    //        i = questionNumber;
    //    }
    //}
    // quizQuestion.innerHTML = quizQuestions[1];
};

var nextQuestion = function () {
    questionNumber++;
    displayQuestion();
};

//This function will process and get the answer

var answer1Clicked = function () {
    "use strict";
 
    if (document.getElementById("a").value == myAnswer ){
        alert("Correct!");
    }else {
        alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
    }
    alert(score);
};

var answer2Clicked = function () {
    "use strict";
    
    if (document.getElementById("b").textContent == myAnswer) {
        alert("Correct!");
    } else {
        alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
    }
    alert(score);
};

var answer3Clicked = function () {
    "use strict";

    if (document.getElementById("c").value == myAnswer) {
        alert("Correct!");
    } else {
        alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
    }
    alert(score);
};

var answer4Clicked = function () {
    "use strict";
    
    if (document.getElementById("d").textContent == myAnswer) {
        alert("Correct!");
    } else {
        alert("Your answer choice was incorrect, The correct answer is " + myAnswer);
    }
    score++;
    alert(score);
};


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