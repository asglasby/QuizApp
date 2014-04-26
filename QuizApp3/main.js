window.onload = function () {

// Quiz constructor
function quizConstructor(question, answer, enabled, asked) {
    this.question = question;
    this.answer = answer;
    this.enabled = enabled;
    this.asked = asked;
}

// Create quiz array
var quiz = new Array();

// All quiz questions and answers
quiz[0] = new quizConstructor("Montgomery", "Alabama", false, 0);
quiz[1] = new quizConstructor("Juneau", "Alaska", true, 0);
quiz[2] = new quizConstructor("Phoenix", "Arizona", true, 0);
quiz[3] = new quizConstructor("Little Rock", "Arkansas", false, 0);
quiz[4] = new quizConstructor("Sacramento", "California", true, 0);
quiz[5] = new quizConstructor("Denver", "Colorado", false, 0);
quiz[6] = new quizConstructor("Hartford", "Connecticut", false, 0);
quiz[7] = new quizConstructor("Dover", "Delaware", false, 0);
quiz[8] = new quizConstructor("Tallahassee", "Florida", false, 0);
quiz[9] = new quizConstructor("Atlanta", "Georgia", true, 0);

/////////////////////////////////////////////////
// END: CREATE SAMPLE QUIZ ARRAY TO USE IN EXAMPLE //
/////////////////////////////////////////////////


// Find the number of questions that the user has enabled
var numEnabled = 0;

for (var i = 0; i < quiz.length; i++) {
    if (quiz[i].enabled == true) {
        numEnabled++;
    }
}


// Ask all enabled questions in random order
for (var i = 0; i < numEnabled; i++) {

    // Find random question that hasn't been asked yet
    do {

        var randomNum = Math.floor(Math.random() * quiz.length);

    } while (quiz[randomNum].enabled == false || quiz[randomNum].asked == 1);

    // Ask question
    var question = quiz[randomNum].question + " is the capital of which state?";
    document.getElementById("divSolution").innerHTML += "<p>" + question + "</p>";

    // Mark question as asked
    quiz[randomNum].asked++;
}
}