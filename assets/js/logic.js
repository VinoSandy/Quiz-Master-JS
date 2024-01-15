
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
var correctQuestions=0;
var score;


console.log("Timer:"+time);

//Function to start timer

function startQuiz(){

timer= setInterval(function countDown(){
    time--;
    timerEl.textContent=time;
    if(time<=0){
        stopQuiz();
    }
},1000);

function countDown(){
    
}

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
            
             optionBtn.onclick= checkAnswer;            
        }
    );

}




//code to verify the choosen answer and deduct time for wrong answer and move to next question

function checkAnswer(event){


    var selectedChoice = event.target.value;
    if( selectedChoice !== displayQuestions[currentQuestionIndex].answer){
        time -= 5;

        if(time<=0){
            time = 0;
        }
        timerEl.textContent=time;
  
        feedbackEl.textContent="Wrong!";
        }
   
     else{
        feedbackEl.textContent="Correct";
        correctQuestions++;
     }
    
     feedbackEl.setAttribute( "class","feedback"); 
    setTimeout(function () { 
        feedbackEl.setAttribute( 
            "class", 
            "feedback hide"
        ); 
    }, 1000); 

   
 console.log("selectedvalue"+ selectedChoice);

     //code to display next questions in the browser
currentQuestionIndex++;
if(currentQuestionIndex === displayQuestions.length){
    stopQuiz();
}
else{
    startQuestions();

}
  
}


/*Function to end the quiz*/
function stopQuiz(){
//clears the timer
clearInterval(timer);

//Gets the DOM element and displays the content by removing attributes hide functionality
var endScreenEl= document.getElementById("end-screen");
 endScreenEl.removeAttribute("class");

//Set the finalscore in the DOM element
var finalScoreEl= document.getElementById("final-score");

score= time + correctQuestions*10;

finalScoreEl.textContent= score;

//Hides the display question element
questionsEl.setAttribute("class","hide");

}

function saveScore(){
var name= initialEl.value.trim().toUpperCase();

console.log("name:"+name)

if(name !== ""){
    var highScore= JSON.parse(localStorage.getItem("highScore")) ;

    if(!highScore){
    highScore= [];
  }
}    

else{
    alert("Please Enter your initials..");
    return;
}

 var latestScore = { score : score,
                     name : name};

 highScore.push(latestScore);

 localStorage.setItem("highScore", JSON.stringify(highScore));
 
 console.log(latestScore.score+":"+latestScore.name);
 

displayHighScore();

}






startBtn.onclick = startQuiz;

submitBtn.onclick= saveScore;
