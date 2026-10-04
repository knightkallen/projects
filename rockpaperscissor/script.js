console.log("Welcome to Rock Paper Scissors Game!");
getcomputerchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// console.log(getcomputerchoice());
gethumanchoice = () => {
    const choice = prompt("Enter your choice (rock, paper, or scissors):");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please try again.");
        return gethumanchoice();
    }
}
// console.log(gethumanchoice());
let humanscore = 0;
let computerscore = 0;
playround = () => {
    let humanchoice = gethumanchoice();
    let computerchoice = getcomputerchoice();
    humanchoice = humanchoice.toLowerCase();
    if(humanchoice === computerchoice) {
        console.log(`It's a tie! Both chose ${humanchoice}.`);
    } else if((humanchoice === "rock" && computerchoice === "scissors") ||
              (humanchoice === "paper" && computerchoice === "rock") ||
              (humanchoice === "scissors" && computerchoice === "paper")) {
        console.log(`You win! ${humanchoice} beats ${computerchoice}.`);
        humanscore++;
    } else {
        console.log(`Computer wins! ${computerchoice} beats ${humanchoice}.`);
        computerscore++;
    }
}
playgame = () => {
    console.log("Starting the game...");
    console.log("You will play 5 rounds against the computer.");
    for(let i = 0; i < 5; i++) {
        playround();
    }
    console.log(`Final Score - You: ${humanscore}, Computer: ${computerscore}`);
}
playgame();
