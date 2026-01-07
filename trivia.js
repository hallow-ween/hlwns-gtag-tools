const questionText = document.getElementById("question");
const answerBox = document.getElementById("userAnswer");
const enterButton = document.getElementById("enter");
const finalScore = document.getElementById("finalScore");
const next = document.getElementById("next");
let questionNumber = 0;
    
const questions = [
    { question: "1. When was Gorilla Tag released?", answer: "february 12th, 2021", answer2: "2/12/21" },
    { question: "2. What was the first free cosmetic released in Gorilla Tag?", answer: "paperbag hat", answer2: null },
    { question: "3. Who was the original creator of Gorilla Tag?", answer: "lemming", answer2: null },
    { question: "4. Which map do you spawn in when first starting Gorilla Tag?", answer: "forest", answer2: "tutorial" },
    { question: "5. True or False: Shiny Rocks is the currency for Gorilla Tag.", answer: "true", answer2: null },
    { question: "6. What was the first Creator Program for Gorilla Tag?", answer: "finger painter", answer2: null },
    { question: "7. What is the most expensive Gorilla Tag cosmetic?", answer: "golden umbrella", answer2: "silver cherry blossom branch" },
    { question: "8. What is the rarest badge in Gorilla Tag?", answer: "admin badge", answer2: null },
    { question: "9. True or False: There are requirements for the Another Axiom Creator Badge?", answer: "false", answer2: null },
    { question: "10. What cosmetic is given to Forest Guides in Gorilla Tag?", answer: "fire stick", answer2: null },
    { question: null, answer: null}
];
questionText.textContent = questions[questionNumber].question;
let amountOfQuestions = questions.length - 1;
let attempts = 0;
// let failedQuestions = 0;
let correct = null;
let finishedQuiz = false;

function updateQuestions() {
questionNumber++;
questionText.style.color = "white";
questionText.textContent = questions[questionNumber].question;
if (questionNumber >= amountOfQuestions) {
questionText.textContent = "Congrats! You finished the Trivia!";
answerBox.value = "";
// if (failedQuestions = 1) { working on later! 
//finalScore.textContent = "you failed 1 question!";
//} 
//if (failedQuestions = 0 || failedQuestions > 1) {
//finalScore.textContent = `you failed ${failedQuestions} questions`;
finishedQuiz = true;
}
if (finishedQuiz == true) {
answerBox.style.opacity = 0;
}
attempts = 0;
}


function answerQuestion() {
const userAnswer = answerBox.value.toLowerCase().trim();
const correctAnswer = questions[questionNumber].answer;
const correctAnswer2 = questions[questionNumber].answer2;
attempts++;
console.log(attempts);
console.log(userAnswer);

if (userAnswer == correctAnswer || userAnswer == correctAnswer2 ) {
 correct = true;
questionText.textContent = "Correct!";
questionText.style.color = "green";
attempts = 0;
} else {
  correct = false;
    questionText.textContent = "Incorrect!";
questionText.style.color = "red";
}
  console.log(`answer is ${correct}`);

if (attempts > 3) {
questionText.style.color = "orange";
questionText.textContent = `The correct answer is ${correctAnswer}!`;
// failedQuestions++;
// console.log(`you failed ${failedQuestions} questions!`);
}
}


    
