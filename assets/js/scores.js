var clearEl = document.getElementById("clear");
var olEl= document.getElementById("highscores");



function displayHighScore(){

    var highScore= JSON.parse(localStorage.getItem("highScore"));
    
    if(!highScore){
        highScore = [];
    }


    highScore.sort(function(a,b){     
        return b.score - a.score;
    });

    highScore.forEach(function(score) {
        var liEL = document.createElement("li");

        liEL.textContent= score.name + ":" + score.score;
        olEl.appendChild(liEL); 
    });
              
}

function clearScore(){
    localStorage.removeItem("highScore");
    window.location.reload(); 
}

clearEl.onclick= clearScore;

displayHighScore();

