//import displayQuestions from "./questions"

//Getting DOM elements from index.html

var timerEl= document.getElementById("time");
var startScreen=document.getElementById("start-screen");
var startBtn= document.getElementById("start");
var questionsEl= document.getElementById("questions");
var displayEl=document.getElementById("question-title")
var choiceEl = document.getElementById("choices");
var initialEl= document.getElementById("initials");
var submitBtn = document.getElementById("submit");
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
        stopQuiz();
    }
},1000);

timer.textContent=time;
console.log("Time inside interval:"+time);

//dynamically hiding the start screen
startScreen.setAttribute("class","hide");

//dynamically making the question element visible
questionsEl.removeAttribute("class");

startQuestions();

}

//Function to display questions with options
function startQuestions(){
    var currentQuestion= displayQuestions[currentQuestionIndex];
    
    displayEl.textContent=currentQuestion.questions;
    choiceEl.innerHTML="";

    //Creates button element for each question in the webpage dynamically
    currentQuestion.options.forEach(
        function (choice, i){
            var optionBtn= document.createElement("button");
            optionBtn.setAttribute("value", choice);

      //Sets the text content of the button to display the option number 
            optionBtn.textContent= i + 1+"."+choice;
            choiceEl.appendChild(optionBtn);
           
          optionBtn.addEventListener('click', function(event){
            var clickedValue = event.target.value;
            console.log('Clicked Value:', clickedValue);
            
             optionBtn.onclick= checkAnswer();


        })
            
        }
    );

}

console.log("This value"+this.value);


//code to verify the choosen answer and deduct time for wrong answer and move to next question

function checkAnswer(){

    if( this.value !== displayQuestions[currentQuestionIndex].answer){
        time -= 5;

        if(time<=0){
            time = 0;
        }

        timerEl.textContent=time;
        feedbackEl.textContent="Wrong!";
    }
   
     else{
        feedbackEl.textContent="Correct";
     }
    

     //code to display next questions in the browser
currentQuestionIndex++;
if(currentQuestionIndex === displayQuestions.length){
    stopQuiz();
}
else{
    startQuestions();
}
  
}

function stopQuiz(){

clearInterval(timer);

var endScreenEl= document.getElementById("end-screen");
 endScreenEl.removeAttribute("class");

var finalScoreEl= document.getElementById("final-score");
finalScoreEl.textContent= time;

questionsEl.setAttribute("class","hide");

}


startBtn.onclick= startTimer();