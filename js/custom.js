/* own js */

/* typewriting title bar */
function msgArray(n){
	this.length = n;
	return this.length;
}

message = new msgArray(3);
message[0] = "Test Your Knowledge";
message[1] = "Test Your Knowledge";
message[2] = "Test Your Knowledge";
repeat = 'infinite';
num = 5;
speed = 250;
delay = 1000;
var counter=1;
var current=0;
var text ="";
var i=0;
var TID = null;

function txtplay(){
	text=text+message[current].substring(i, i+1);
	document.title=text;
	sp=speed;
	i++;
	if (i==message[current].length){
		current++;
		i=0;
		text="";
		sp=delay;
	}
	if (current==message.length){
		if ((repeat == 'finite') && (counter==num)){
			clearTimeout(TID);
			return;
		}
		counter++;
		current=0;
	}
	TID = setTimeout("txtplay()", sp);
};

txtplay();

//game
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const itemnum = document.getElementById("q-num"); 
const pbar = document.getElementById("p-num");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is the best place to take shelter during a tornado?", 
    choice1: "Basement or storm cellar",
    choice2: "Top floor of a building",
    choice3: "Near a window",
    choice4: "Outside in an open field",
    answer: 1
  },
  {
    question: "What should you do if you are caught in a rip current at the beach?", 
    choice1: "Swim parallel to the shore",
    choice2: "Swim directly back to shore",
    choice3: "Dive underwater",
    choice4: "Float and wave for help",
    answer: 1
  },
  {
    question: "What is the most important item to have in an emergency earthquake kit?", 
    choice1: "Flashlight",
    choice2: "First aid kit",
    choice3: "Non-perishable food",
    choice4: "Water",
    answer: 4
  }
,
{
  question: "During a wildfire, what should you do if you cannot evacuate?", 
  choice1: "Stay inside your home and keep windows closed",
  choice2: "Go outside and find a clear area",
  choice3: "Drive through the fire",
  choice4: "Hide in a basement",
  answer: 1
}
,
{
  question: "What is the first step you should take if you are under a tsunami warning?", 
  choice1: "Go to the beach to watch",
  choice2: "Move to higher ground",
  choice3: "Stay indoors",
  choice4: "Call friends and family",
  answer: 2
}
,
{
  question: "How should you prepare for a hurricane?", 
  choice1: "Stock up on supplies and secure your home",
  choice2: "Plan a beach party",
  choice3: "Wait until the last minute to buy essentials",
  choice4: "Ignore the warnings",
  answer: 1
}
,
{
  question: "If you are trapped in a building after an earthquake, what should you do?", 
  choice1: "Yell for help",
  choice2: "Run outside immediately",
  choice3: "Stay under cover and wait for rescuers",
  choice4: "Climb to the roof",
  answer: 3
}
,
{
  question: "What should you do if caught outside during a lightning storm?", 
  choice1: "Seek shelter under a tree",
  choice2: "Lie flat on the ground",
  choice3: "Take cover in a low-lying area",
  choice4: "Stand tall and wave for help",
  answer: 3
}
,
{
  question: "What is the safest action during a flood?", 
  choice1: "Drive through floodwaters",
  choice2: "Move to higher ground",
  choice3: "Stay in your car",
  choice4: "Swim across the water",
  answer: 2
}
,
{
  question: "What should you do if you hear a hurricane warning?", 
  choice1: "Wait until the storm hits to prepare",
  choice2: "Evacuate if instructed by authorities",
  choice3: "Ignore it and continue as normal",
  choice4: "Go to the beach to watch the waves",
  answer: 2
}
 
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    window.alert("You got a "+score+" out of "+MAX_QUESTIONS+"!");
    return window.location.assign("../index.html");
  }
  questionCounter++;
  itemnum.innerText = `Question # ${questionCounter}`;
  pbar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
};

startGame();