function Quiz(question, answer, enabled, asked) {
    this.question = question;
    this.answer = answer;
    this.enabled = enabled == false ? false : true;
    this.asked = asked ? asked : 0;
}
Quiz.prototype.ask = function () {
    document.getElementById("divSolution").innerHTML += "<p>" + this.question + "</p>";
    this.asked++;
}
function stateQuiz(capital, state, enabled) {
    return new Quiz(capital + ' is the capital of which state?', state, enabled);
}

// Create quiz array
var question,
  quiz = [],
  enabled = [],
  stateCapitals = [
    ['Montgomery', 'Alabama', false],
    ['Juneau', 'Alaska', true],
    ['Phoenix', 'Arizona', true],
    ['Little Rock', 'Arkansas', false],
    ["Sacramento", "California", true],
    ["Denver", "Colorado", false],
    ["Hartford", "Connecticut", false],
    ["Dover", "Delaware", false],
    ["Tallahassee", "Florida", false],
    ["Atlanta", "Georgia", true]
  ];

for (var i = 0; i < stateCapitals.length; i++) {
    question = stateQuiz(stateCapitals[i][0], stateCapitals[i][1], stateCapitals[i][2]);
    quiz.push(question);
    if (question.enabled) enabled.push(question);
}
// Ask all enabled questions in random order
while (enabled.length) {
    // splice removes an element from the array and returns the removed element
    question = enabled.splice(Math.floor(Math.random() * enabled.length), 1)[0];
    question.ask();
}