let diceValues = [0, 0, 0, 0, 0];
let rollsLeft = 3;
let score = 0;

function rollDice() {
    if (rollsLeft > 0) {
        for (let i = 0; i < 5; i++) {
            if (diceValues[i] !== 6 && diceValues[i] !== 5 && diceValues[i] !== 4) {
                diceValues[i] = Math.floor(Math.random() * 6) + 1;
            }
        }
        rollsLeft--;
        updateDisplay();
        checkScore();
    }
}

function checkScore() {
    let hasShip = false;
    let hasCaptain = false;
    let hasCrew = false;
    let cargo = 0;

    for (let i = 0; i < 5; i++) {
        if (diceValues[i] === 6) {
            hasShip = true;
        } else if (diceValues[i] === 5) {
            hasCaptain = true;
        } else if (diceValues[i] === 4) {
            hasCrew = true;
        } else {
            cargo += diceValues[i];
        }
    }

    if (hasShip && hasCaptain && hasCrew) {
        score = cargo;
        document.getElementById("score").textContent = score;
        document.getElementById("rollsLeft").textContent = "You're a Winner!";
        document.getElementById("rollButton").disabled = true;
    } else if (rollsLeft === 0) {
        score = 0;
        document.getElementById("score").textContent = score;
        document.getElementById("rollsLeft").textContent = "Game Over";
        document.getElementById("rollButton").disabled = true;
    } else {
        document.getElementById("rollsLeft").textContent = rollsLeft;
    }
}

function resetGame() {
    diceValues = [0, 0, 0, 0, 0];
    rollsLeft = 3;
    score = 0;
    document.getElementById("dice").textContent = "";
    document.getElementById("rollsLeft").textContent = rollsLeft;
    document.getElementById("score").textContent = score;
    document.getElementById("rollButton").disabled = false;
}

function updateDisplay() {
    const diceElement = document.getElementById("dice");
    diceElement.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const dieValue = diceValues[i];
        const dieImageUrl = `dice-${dieValue}.png`;
        const dieImage = document.createElement("img");
        dieImage.setAttribute("src", dieImageUrl);
        dieImage.classList.add("die");
        diceElement.appendChild(dieImage);
    }
}