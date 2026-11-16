console.log("Welcome to Rock Paper Scissors Game!");
const getcomputerchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanscore = 0;
let computerscore = 0;
let gameOver = false;
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
function playround(humanchoice) {
    const computerchoice = getcomputerchoice();
    let message;
    humanchoice = humanchoice.toLowerCase();
    if(humanchoice === computerchoice) {
        message = `It's a tie! Both chose ${humanchoice}.`;
    } else if((humanchoice === "rock" && computerchoice === "scissors") ||
              (humanchoice === "paper" && computerchoice === "rock") ||
              (humanchoice === "scissors" && computerchoice === "paper")) {
        message = `You win! ${humanchoice} beats ${computerchoice}.`;
        humanscore++;
    } else {
        message = `Computer wins! ${computerchoice} beats ${humanchoice}.`;
        computerscore++;
    }
    resultDiv.textContent = message;
    scoreDiv.textContent = `Score - You: ${humanscore}, Computer: ${computerscore}`;
    if(humanscore === 5 || computerscore === 5) {
        gameOver = true;
        if(humanscore === 5) {
            resultDiv.textContent += "\nCongratulations! You won the game!";
        }
        else {
            resultDiv.textContent += "\nSorry! Computer won the game!";
        }
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(gameOver) return;
        playround(button.id);
    });
});
