const colorBox = document.getElementById("colorBox");
const colorOptions = document.querySelectorAll("[data-testid='colorOption']");
const gameInstructions = document.getElementById("gameInstructions");
const gameStatus = document.getElementById("gameStatus");
let scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

const colors = ["rgb(255, 0, 0)", "rgb(255, 192, 203)", "rgb(152, 251, 152)", "rgb(175, 238, 238)", "rgb(250, 128, 114)", "rgb(154, 205, 50)"];
let targetColor;
gameStatus.textContent = '';

 function startGame(){
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor; 
    colorOptions.forEach(button => {
        button.disabled = false;
    });
    console.log(targetColor)
 }

 function confirmPlayerGuess(event){
    let playerGuess = window.getComputedStyle(event.target).backgroundColor;
    console.log(playerGuess)

    if (playerGuess === targetColor){
        gameStatus.textContent = 'Yay! You did it🎀✨';
        gameStatus.className = 'correct';
        scoreDisplay.textContent++;
        startGame();
    } else {
        gameStatus.textContent = 'Oooppsies! Try again 💔'
        gameStatus.className = 'wrong';
         }
}

function newGame(){
    scoreDisplay.textContent = 0;
  
}

function disableBtn() {
     colorOptions.forEach(button => {
        button.disabled = true;
    });
}

colorOptions.forEach(button => {
    button.addEventListener("click", confirmPlayerGuess); 
});

newGameButton.addEventListener("click", newGame );
 startGame();
