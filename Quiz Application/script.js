var quiz = {
    "JS": [
            {
                "id": 1,
                "question": "What is the purpose of the 'this' keyword in JavaScript?",
                "options": [
                    {
                        "a": "It refers to the current HTML element",
                        "b": "It refers to the current function",
                        "c": "It refers to the global object",
                        "d": "It refers to the previous element"
                    }
                ],
                "answer": "b",
                "score": 0,
                "status": ""
            },
            {
                "id": 2,
                "question": "Which JavaScript function is used to convert a string to an integer?",
                "options": [
                    {
                        "a": "parseInt()",
                        "b": "stringToInt()",
                        "c": "convertToInt()",
                        "d": "toInteger()"
                    }
                ],
                "answer": "a",
                "score": 0,
                "status": ""
            },
            {
                "id": 3,
                "question": "What is the purpose of the 'setTimeout' function in JavaScript?",
                "options": [
                    {
                        "a": "To execute a function repeatedly at a specified interval",
                        "b": "To delay the execution of a function by a specified time",
                        "c": "To execute a function immediately",
                        "d": "To stop the execution of a function"
                    }
                ],
                "answer": "b",
                "score": 0,
                "status": ""
            },
            {
                "id": 4,
                "question": "Which of the following is NOT a primitive data type in JavaScript?",
                "options": [
                    {
                        "a": "Number",
                        "b": "String",
                        "c": "Array",
                        "d": "Boolean"
                    }
                ],
                "answer": "c",
                "score": 0,
                "status": ""
            },
            {
                "id": 5,
                "question": "What is the output of the following code?\n\nconsole.log(typeof null);",
                "options": [
                    {
                        "a": "null",
                        "b": "undefined",
                        "c": "object",
                        "d": "string"
                    }
                ],
                "answer": "c",
                "score": 0,
                "status": ""
            },
            {
                "id": 6,
                "question": "What does the 'NaN' value represent in JavaScript?",
                "options": [
                    {
                        "a": "Not a Number",
                        "b": "Null",
                        "c": "No Argument",
                        "d": "Negative"
                    }
                ],
                "answer": "a",
                "score": 0,
                "status": ""
            },
            {
                "id": 7,
                "question": "What is the result of the expression '5' + 3?",
                "options": [
                    {
                        "a": "8",
                        "b": "53",
                        "c": "NaN",
                        "d": "35"
                    }
                ],
                "answer": "b",
                "score": 0,
                "status": ""
            },
            {
                "id": 8,
                "question": "Which of the following is a correct way to create an empty object in JavaScript?",
                "options": [
                    {
                        "a": "{}",
                        "b": "new Object()",
                        "c": "Object.create()",
                        "d": "empty()"
                    }
                ],
                "answer": "a",
                "score": 0,
                "status": ""
            },
            {
                "id": 9,
                "question": "What is the purpose of the 'localStorage' object in JavaScript?",
                "options": [
                    {
                        "a": "To store data that has no expiration time",
                        "b": "To store data that expires after a specified time",
                        "c": "To store data temporarily during a session",
                        "d": "To store data that is shared between different websites"
                    }
                ],
                "answer": "a",
                "score": 0,
                "status": ""
            },
            {
                "id": 10,
                "question": "What does the '=== operator' do in JavaScript?",
                "options": [
                    {
                        "a": "Compares two values for equality, ignoring the data type",
                        "b": "Compares two values for equality, considering the data type",
                        "c": "Assigns a value to a variable",
                        "d": "Performs arithmetic addition"
                    }
                ],
                "answer": "b",
                "score": 0,
                "status": ""
            },
            {
                "id": 11,
                "question": "What is the purpose of the 'Array.isArray()' function in JavaScript?",
                "options": [
                    {
                        "a": "To check if a value is an array",
                        "b": "To create a new array",
                        "c": "To add an element to an array",
                        "d": "To remove an element from an array"
                    }
                ],
                "answer": "a",
                "score": 0,
                "status": ""
            },
            {
                "id": 12,
                "question": "What is the result of the expression 'typeof undefined'?",
                "options": [
                    {
                        "a": "undefined",
                        "b": "null",
                        "c": "object",
                        "d": "string"
                    }
                ],
                "answer": "a",
                "score": 0,
                "status": ""
            },
            {
                "id": 13,
                "question": "What is the purpose of the 'try...catch' statement in JavaScript?",
                "options": [
                    {
                        "a": "To terminate the execution of a function",
                        "b": "To create a loop",
                        "c": "To handle errors during program execution",
                        "d": "To define a new variable"
                    }
                ],
                "answer": "c",
                "score": 0,
                "status": ""
            },
            {
                "id": 14,
                "question": "Which of the following is a correct way to create a new date object representing the current date and time?",
                "options": [
                    {
                        "a": "new Date()",
                        "b": "Date.getCurrent()",
                        "c": "Date.now()",
                        "d": "currentDate()"
                    }
                ],
                "answer": "a",
                "score": 0,
                "status": ""
            },
            {
                "id": 15,
                "question": "What is the purpose of the 'map()' function in JavaScript?",
                "options": [
                    {
                        "a": "To convert an array into a string",
                        "b": "To modify each element of an array",
                        "c": "To find the maximum value in an array",
                        "d": "To add elements to an array"
                    }
                ],
                "answer": "b",
                "score": 0,
                "status": ""
            }
        ]
    }
    
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });