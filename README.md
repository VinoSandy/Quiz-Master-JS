# Quiz-Master-JS
## Description:
   Quiz-Master-JS is a timed quiz on javascript fundamentals that stores scores on local variable and displays them on the web browser.
## Contents:
   quiz-Master-JS has following contents,
   # HTML:
     index.html and highscores.html
   * index.html - is the main page of the project or the landing page, it has elements to start the quiz,timer,display questions and a navigator to view highscore.
   * highscores.html - is the page to display highscore, has elements to get back to the mainpage and clear the contents of the page.

   # CSS:
     style.css - defined with styles for all the elements of the project.

   # sfx:
     correct.wav and incorrect.wav - both are audio files used to play audio when the correct and wrong options are selected in the quiz.
     

   # Java Script:
     logic.js, questions.js , scores.js

    * questions.js - has array of nested objects variable with questions, options and answer to be used in the quiz.

    * logic.js - has functions to start the quiz and timer when the start button is clicked, 
      function to display qusetions with options as a button in the browser retrived from questions.js , 
      function to validate the selected option by the user in the web browser , display 'Wrong' or 'correct' with audio files appropriately and calculate score ,
      function to get the score value from local storage , modify with new score and push it to the local storage again.

    * scores.js- has function to go pack to the main page,
    function to compare previously stored score with newscore in the local storage and display them with initials entered by the user ,
    function to empty the score and initial from the local storage.
## Demo:
  
    
