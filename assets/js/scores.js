var clearEl = document.getElementById("clear");
var olEl= document.getElementById("highscores");


function clearScore(){
    localStorage.removeItem("highScore");
}



function displayHighScore(){

    var highScore= JSON.parse(localStorage.getItem("highScore")) || [];

    highScore.sort(function(a,b){     
        return b.score - a.score;
    });

    highScore.forEach(function(score) {
        var liEL = document.createElement("li");

        liEL.textContent= score.name + ":" + score.score;
        olEl.appendChild(liEL); 
    });
              
}

clearEl.onclick= clearScore();

displayHighScore();

