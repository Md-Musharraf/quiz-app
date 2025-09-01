const quiz = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: "Blue Whale",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    answer: "Einstein",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "Which organ purifies blood in the human body?",
    options: ["Heart", "Lungs", "Kidney", "Liver"],
    answer: "Kidney",
  },
  {
    question: "Which country is called the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "Korea"],
    answer: "Japan",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Lion", "Horse", "Cheetah", "Tiger"],
    answer: "Cheetah",
  },
];

const start = document.querySelector("#start");
const main = document.querySelector("main");
const mainContainer = document.querySelector(".main-container");
const q = document.querySelector(".question h1");
const option1 = document.querySelector(".box-1");
const option2 = document.querySelector(".box-2");
const option3 = document.querySelector(".box-3");
const option4 = document.querySelector(".box-4");
const boxes = document.querySelectorAll(".box");
const nextBtn = document.querySelector(".nextBtn button");
const time = document.querySelector(".time span");
const container = document.querySelector(".container");

let index = 0;
let num = 1;

// for displaying the question and answer
let updateContent = () => {
  stopTimer();
  document.querySelector("h2").style.display = "none";
  q.textContent = `Q${num}. ${quiz[index].question}`;
  option1.textContent = `${quiz[index].options[0]}`;
  option2.textContent = `${quiz[index].options[1]}`;
  option3.textContent = `${quiz[index].options[2]}`;
  option4.textContent = `${quiz[index].options[3]}`;
  index++;
  num++;
  startTimer();
};

// main logic
container.addEventListener("click", function (event) {
  if (event.target.textContent == quiz[index - 1].answer) {
    console.log("winner");
    event.target.style.background = "#17cd57";
    event.target.style.color = "#ffff";
  } else {
    console.log("wrong answer");
    event.target.style.background = "#d3c388";
  }
});

// variable
let i;
let timeOut;

// start countdown
let startTimer = function () {
  // stop previous timer (important!)
  clearInterval(timeOut);

  i = 15; // reset timer
  time.textContent = i; // display immediately

  timeOut = setInterval(function () {
    i--;
    time.textContent = i.toString().padStart(2, "0");

    if (i <= 0) {
      clearInterval(timeOut); // stop when time is over
      // you can also auto-next question here if you want
      document.querySelector("h2").style.display = "block";
    }
  }, 1000);
};

// clear countdown
let stopTimer = function () {
  clearInterval(timeOut);
};

// start
start.addEventListener("click", () => {
  start.style.display = "none";
  mainContainer.style.display = "block";
  updateContent();
});

// for next question
nextBtn.addEventListener("click", updateContent);
