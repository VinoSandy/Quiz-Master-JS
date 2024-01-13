//import displayQuestions from "./questions"

//Getting DOM elements from index.html

var timerEl= document.getElementById("#time");
var startScreen=document.getElementById("#start-screen");
var startBtn= document.getElementById("#start");
var questionsEl= document.getElementById("#questions");
var choiceEl = document.getElementById("#choices");
var initialEl= document.getElementById("#initials");
var submitBtn = document.getElementById("#submit");
var feedbackEl= document.getElementById("feedback");

// Initial status of time and qusetion before starting the quiz
var currentQuestionIndex = 0;
var timer;
var time= displayQuestions.length*10;

console.log("Timer:"+time);

//Function to start timer

function startTimer(){

timer= setInterval(function clock(){
    time--;
    timerEl.textContent=time;
    if(time<=0){
        return ;
    }
},1000);

timer.textContent=time;
console.log("Time inside interval:"+time);

//dynamically hiding the start screen
startScreen.setAttribute("class","hide");

//dynamically making the question element visible
questionsEl.removeAttribute("class");

}