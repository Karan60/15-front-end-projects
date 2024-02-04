const questions = [
  [
    "Which language was used to create Facebook?", "Python", "French", "JavaScript",
    "Php", "none", 4
  ],
  [
    "What is the capital of Japan?", "Seoul", "Beijing", "Tokyo",
    "Bangkok", "none", 3
  ],
  [
    "Which planet is known as the Red Planet?", "Earth", "Mars", "Jupiter",
    "Venus", "none", 2
  ],
  [
    "In which year did the Titanic sink?", "1912", "1920", "1905",
    "1935", "none", 1
  ],
  [
    "Who wrote 'Romeo and Juliet'?", "Charles Dickens", "William Shakespeare", "Jane Austen",
    "Mark Twain", "none", 2
  ],
  [
    "Which programming language is known for its use in web development?", "Java", "Python", "HTML",
    "C++", "none", 3
  ],
  [
    "What is the largest mammal on Earth?", "Elephant", "Blue Whale", "Giraffe",
    "Hippopotamus", "none", 2
  ],
  [
    "Which country is known as the Land of the Rising Sun?", "China", "South Korea", "Japan",
    "Vietnam", "none", 3
  ],
  [
    "In which year did World War II end?", "1945", "1939", "1950",
    "1942", "none", 1
  ],
  [
    "What is the capital of Australia?", "Sydney", "Canberra", "Melbourne",
    "Perth", "none", 2
  ], 
  // Add more questions here...
];

const levels = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000];
let money = 0;
let currentQuestion = 0;

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultElement = document.getElementById('result');

function loadQuestion() {
  const question = questions[currentQuestion];
  questionElement.innerHTML = `<strong>Question for Rs. ${levels[currentQuestion]}</strong><br>${question[0]}`;
  
  optionsContainer.innerHTML = '';
  for (let i = 1; i <= 4; i++) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = question[i];
    optionDiv.addEventListener('click', () => checkAnswer(i));
    optionsContainer.appendChild(optionDiv);
  }
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestion];
  const correctOption = question[6];

  if (selectedOption === correctOption) {
    money = levels[currentQuestion];
    resultElement.textContent = "Correct answer! You earned Rs. " + money;
  } else {
    resultElement.textContent = "Wrong answer! Reloading from the beginning.";
    setTimeout(() => {
      resultElement.textContent = '';
      resetQuiz();
    }, 2000);
    return;
  }

  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    resultElement.textContent += " You take Rs. " + money + " to home.";
  }
}

function resetQuiz() {
  currentQuestion = 0;
  money = 0;
  loadQuestion();
}

loadQuestion();