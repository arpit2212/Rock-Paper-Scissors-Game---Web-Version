let userScore = 0;
let compScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector(".result");
let humanScore = document.querySelector(".human_score");
let computerScore = document.querySelector(".computer_score");

function randomNumber() {
    return Math.floor(Math.random() * 3 + 1); // Generates 1, 2, or 3
}

function draw(choiceName) {
    result.innerText = `It's a draw! Both chose ${choiceName}.`;
    changeResultClass('result');
}

function win(userChoice, computerChoice) {
    const winningMessage = getWinningMessage(userChoice, computerChoice);
    result.innerText = `You won! ${winningMessage}`;
    userScore++;
    humanScore.innerText = userScore;
    changeResultClass('result_2');
}

function lose(userChoice, computerChoice) {
    const losingMessage = getWinningMessage(computerChoice, userChoice); // Reverse roles
    result.innerText = `You lost! ${losingMessage}`;
    compScore++;
    computerScore.innerText = compScore;
    changeResultClass('result_3');
}

function getWinningMessage(winner, loser) {
    if (winner === 1 && loser === 3) return "Rock beats Scissors";
    if (winner === 2 && loser === 1) return "Paper beats Rock";
    if (winner === 3 && loser === 2) return "Scissors beat Paper";
}

function changeResultClass(newClass) {
    // Remove all result-related classes
    result.classList.remove("result", "result_2", "result_3");
    // Add the new result class
    result.classList.add(newClass);
}

function playGame(userChoice) {
    const computerChoice = randomNumber();
    const choices = ["Rock", "Paper", "Scissors"];
    const userChoiceName = choices[userChoice - 1];
    const computerChoiceName = choices[computerChoice - 1];

    if (userChoice === computerChoice) {
        draw(userChoiceName);
    } else if (
        (userChoice === 1 && computerChoice === 3) || // Rock beats Scissors
        (userChoice === 2 && computerChoice === 1) || // Paper beats Rock
        (userChoice === 3 && computerChoice === 2)    // Scissors beats Paper
    ) {
        win(userChoice, computerChoice);
    } else {
        lose(userChoice, computerChoice);
    }
}

// Event listeners for user moves
rock.addEventListener("click", () => playGame(1)); // Rock
paper.addEventListener("click", () => playGame(2)); // Paper
scissors.addEventListener("click", () => playGame(3)); // Scissors
