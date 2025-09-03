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

// get data;
// const getData = async () => {
//   let response = await fetch("https://the-trivia-api.com/v2/questions");
//   let data = await response.json();
// };

// getData();

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
const right = document.querySelector("#right");
const wrong = document.querySelector("#wrong");

let index = 0;
let num = 1;
let rA = 0;
let wA = 0;

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
  boxes.forEach((box) => {
    box.style.background = ""; // reset color
    box.style.color = "";
    box.disabled = false; // re-enable
  });
};

// main logic
boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    let correctAns = quiz[index - 1].answer;
    boxes.forEach((b) => (b.disabled = true));

    if (e.target.textContent === correctAns) {
      box.style.background = "#17cd57";
      box.style.color = "fff";
      rA++;
      right.innerHTML = `right : ${rA}`;
    } else {
      box.style.background = "#ff4d4d";
      box.style.color = "fff";
      wA++;
      wrong.innerHTML = `wrong : ${wA}`;
    }

    boxes.forEach((b) => {
      if (b.textContent === correctAns) {
        b.style.background = "#17cd57";
        b.style.color = "#fff";
      }
    });
  });
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
      wA++;
      wrong.innerHTML = `wrong : ${wA}`;
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
