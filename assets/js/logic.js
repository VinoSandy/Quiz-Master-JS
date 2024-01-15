
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
var correctAudio = new Audio("./assets/sfx/correct.wav");
var incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

//Function to start timer

function startQuiz(){

timer= setInterval(countDown,1000);
timerEl.textContent=time;

//dynamically hiding the start screen in browser
startScreen.setAttribute("class","hide");

//dynamically making the question element visible in browser
questionsEl.removeAttribute("class");

startQuestions();

}

/*sets countdown for timer element in the browser */
function countDown(){
    time--;
    timerEl.textContent=time;
    if(time<=0){
        stopQuiz();
    }
}

/* display questions with options*/
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




/* verify the selected answer and deduct time for wrong answer and move to next question*/

function checkAnswer(event){
    var selectedChoice = event.target.value;

    if( selectedChoice !== displayQuestions[currentQuestionIndex].answer){
        time -= 5;
        if(time<=0){
            time = 0;
        }
        timerEl.textContent=time;
        feedbackEl.textContent="Wrong!";
        incorrectAudio.play();
        }
   
     else{
        feedbackEl.textContent="Correct";
        correctQuestions++;
        correctAudio.play();
     }

     //Makes feedback element visible for a second    
     feedbackEl.setAttribute( "class","feedback"); 
     setTimeout(function () { 
        feedbackEl.setAttribute( 
            "class", 
            "feedback hide"
        ); 
    }, 1000); 

 // Displays next questions in the browser
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

/* Save Score to the local storage */
function saveScore(){
  //stores the value of initial element by removing spaces and coverting it to uppercase  
var name= initialEl.value.trim().toUpperCase();

//
if(name !== ""){
//Retrives value from the localstorage and stores in the variable highscore
    var highScore= JSON.parse(localStorage.getItem("highScore")) ;
//sets the variable with array if the value is null or undefined
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

 //variable modified with newscore                    
 highScore.push(latestScore);

 //saves updated value in the localstorage
 localStorage.setItem("highScore", JSON.stringify(highScore));
 
 console.log(latestScore.score+":"+latestScore.name);
 
displayHighScore;
//navigates to highscore page
window.location.href= "highscores.html";

}


startBtn.onclick = startQuiz;

submitBtn.onclick= saveScore;
