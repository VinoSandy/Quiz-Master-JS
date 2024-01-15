var clearEl = document.getElementById("clear");
var olEl= document.getElementById("highscores");


/*Displays highscore in highscores.html */
function displayHighScore(){

    var highScore= JSON.parse(localStorage.getItem("highScore"));
    
    if(!highScore){
        highScore = [];
    }

//Sorts the score stored in local storage
    highScore.sort(function(a,b){     
        return b.score - a.score;
    });

    //displays sorted highscore by dynamically creating list element in the web page
    highScore.forEach(function(score) {
        var liEL = document.createElement("li");

        liEL.textContent= score.name + ":" + score.score;
        olEl.appendChild(liEL); 
    });
              
}

//Removes highScore from local storage and reloads the current webpage.
function clearScore(){
    localStorage.removeItem("highScore");
    window.location.reload(); 
}

//invokes clearscore function when clear score button is clicked.
clearEl.onclick= clearScore;

displayHighScore();

