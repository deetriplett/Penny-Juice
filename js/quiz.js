var questions = [
  ["How many states are in the United States?", 50]
  ["How many continents are there?", 7]
  ["How many legs does an insect have", 6]
  ["How many side are there of an octagon?", 8] 
];

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];


function print(message) {
  document.write(message);
}

//Loop thru array
for ( var i = 0; i < questions.length; i += 1 ) {
  question = questions[i][0];//location in array
  answer = questions[i][1];
  response = parseint(prompt(question));
  if (response === answer) {
    correctAnswers =+1;
  }
}

 var html = "You got " + correctAnswers + " question(s) right!";
print(html);








