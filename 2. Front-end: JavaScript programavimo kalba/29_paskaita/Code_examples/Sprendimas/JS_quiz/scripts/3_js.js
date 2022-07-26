// Variables
// -- DOM elements
const startBtnElement = document.querySelector('#start-btn');
const nextBtnElement = document.querySelector('#next-btn');

const quizQuestionElement = document.querySelector('#quiz__question');
const questionElement = document.querySelector('#question');
const answersBtnsElement = document.querySelector('#answers-btns');

const resultElement = document.querySelector('#result');
// -- logic
let questions = [];
let index;
let score = 0;

// --- fetching data (questions from data folder) to questions array
fetch('../data/JS_questions.json')
  .then((resposne) => resposne.json())
  .then((data) => questions.push(...data));

// Functions
// -- starting game (after pressing "START QUIZ")
const startQuiz = () => {
  startBtnElement.classList.add('hide');

  quizQuestionElement.classList.remove('hide');

  // --- reseting score and index
  if (!resultElement.classList.contains('hide')) {
    resultElement.classList.add('hide');
    score = 0;
  }

  index = 0;

  setNextQuestion();
};

// -- reseting "NEXT QUESTION" button and setting new question
const setNextQuestion = () => {
  resetState();
  showQuestion(questions[index]);
};

// -- selecting answer (by clicking on it's button)
const selectAnswer = (e) => {
  let correct = e.target.dataset.correct;

  if (correct) {
    e.target.classList.add('correct');
    e.target.innerHTML += ` <i class="fas fa-check-circle"></i>`;
    score++;
  } else {
    e.target.classList.add('wrong');
    e.target.innerHTML += ` <i class="fas fa-times-circle"></i>`;
  }

  Array.from(answersBtnsElement.children).forEach(
    (btn) => (btn.disabled = true)
  );

  if (questions.length > index + 1) {
    nextBtnElement.classList.remove('hide');
  } else {
    startBtnElement.innerText = 'RESTART QUIZ';
    startBtnElement.classList.remove('hide');

    resultElement.classList.remove('hide');
    if (score / questions.length === 1) {
      resultElement.innerText = `Correct answers: ${score} from ${questions.length}. You are a ⭐ in Javascript!`;
    } else {
      resultElement.innerText = `Correct answers: ${score} from ${questions.length}`;
    }
  }
};

// -- showing question ir answers from questions array
const showQuestion = (question) => {
  questionElement.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement('button');

    button.innerText = answer.text;
    button.classList.add('btn', 'btn-js');

    if (answer.correct) button.dataset.correct = answer.correct;

    button.addEventListener('click', selectAnswer);

    answersBtnsElement.appendChild(button);
  });
};

// -- showing next question (after clicking "NEXT QUESTION")
const showNextQuestion = () => {
  index++;
  setNextQuestion();
};

// -- reseting "NEXT QUESTION" button and answer buttons (removing previous ones)
const resetState = () => {
  nextBtnElement.classList.add('hide');

  while (answersBtnsElement.firstChild) {
    answersBtnsElement.removeChild(answersBtnsElement.firstChild);
  }
};

// Events
document.addEventListener('DOMContentLoaded', () => {
  startBtnElement.style.backgroundColor = 'var(--js-color)';
});

startBtnElement.addEventListener('click', startQuiz);
nextBtnElement.addEventListener('click', showNextQuestion);
