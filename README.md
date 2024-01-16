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
# Demo 1:

 ![Demo 1 ](./assets/demo/Demo%201.gif)

The above demo covers secenario that when the user is in the landing page and clicks the start button following event takes place,
* timer is on and countdown starts.
* user is displayed with questions and options as buttons.
* when user selects wrong option, user displayed with error message and 5 second time is deducted from the timer and next question displayed.
* when user selects correct option user displayed with 'correct' message and timer continues without any change in countdown.
* when user answers all the questions, user is displayed with score and option to enter user initial.
* on selecting initial user is navigated to highscore page and displayed with score and intial of the user.
* on selecting go back button user is navigated to the main page.

# Demo 2:

  ![Demo 2](./assets/demo/Demo%202.gif)

  Secenario covered in Demo 2 is,
  * when user selects viewhighscore link ,user is navigated to the highscore page to display high scores.
  * when user takes test again without clearing the score, user is displayed with highscore with initials entered in sorted score order.
  * display highscore page gets cleared with score data when user clicks clear score button.
  


