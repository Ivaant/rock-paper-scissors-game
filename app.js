//cache the DOM elems
const scoreBoard_div = document.getElementById("score-board");
const scoreUser_span = document.getElementById("user-score");
const scoreComp_span = document.getElementById("comp-score");
const userChoice_div = document.getElementById("user-choice");
const compChoice_div = document.getElementById("comp-choice");
const result_h1 = document.querySelector("#result h1");
const choiceRock_img = document.getElementById("r");
const choicePaper_img = document.getElementById("p");
const choiceScissors_img = document.getElementById("s");

const buttons = [choiceRock_img, choicePaper_img, choiceScissors_img];
let scoreUser = 0;
let scoreComp = 0;
const choicesTable = {
    r: "Rock",
    p: "Paper",
    s: "Scissors"
};

function compChoice() {
    const choices = ['r', 'p', 's'];
    const compChoice = Math.floor(Math.random() * 3);
    return choices[compChoice];
}

function win(user, comp) {
    scoreUser++;
    const message = `${choicesTable[user]} beats ${choicesTable[comp]}. You wins! 😎`;
    displayScore(true, user, comp, message);

}

function lose(user, comp) {
    scoreComp++;
    const message = `${choicesTable[comp]} beats ${choicesTable[user]}. You lose 💩`;
    displayScore(false, user, comp, message);
}

function draw(user, comp) {
    const message = `${choicesTable[user]} equals ${choicesTable[comp]}. Draw game 🐲`;
    displayScore(null, user, comp, message);
}

function displayScore(isWin, user, comp, message) {
    const user_img = document.createElement("img");
    user_img.setAttribute("src", `./images/${choicesTable[user]}.jpg`);
    userChoice_div.innerHTML = "";

    const comp_img = document.createElement("img");
    comp_img.setAttribute("src", `./images/${choicesTable[comp]}.jpg`);
    compChoice_div.innerHTML = "";

    if (isWin) {
        user_img.classList.add("glow");
    } else if (isWin === false) {
        comp_img.classList.add("glow");
    }

    userChoice_div.appendChild(user_img);
    compChoice_div.appendChild(comp_img);

    scoreUser_span.textContent = scoreUser;
    scoreComp_span.textContent = scoreComp;
    result_h1.textContent = message;
}

function game(userChoice) {
    const computerChoice = compChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
    }

}


function main() {
    //connect handlers
    buttons.forEach(button => {
        button.addEventListener("click", (event) => game(event.target.id));
    });
}
main();