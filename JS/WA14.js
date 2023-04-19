async function yeezy() {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();
    const quote = data.quote;
    const words = quote.replace(/[^\w\s]/gi, "").split(" ");

    let highestScrabblePoints = 0;
    let highestScrabbleWord = "";
    words.forEach(word => {
        const scrabblePoints = calculateScrabblePoints(word);
        if (scrabblePoints > highestScrabblePoints) {
            highestScrabblePoints = scrabblePoints;
            highestScrabbleWord = word;
        }
    });

    document.getElementById("quote").textContent = `"${quote}"`;
    document.getElementById("highest-scrabble-word").textContent = highestScrabbleWord;
    document.getElementById("scrabble-points").textContent = highestScrabblePoints;
}

function calculateScrabblePoints(word) {
    const scrabblePointsMap = {
      "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8,
      "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1,
      "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10
    };

    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        sum += scrabblePointsMap[letter] || 0;
    }
    return sum;
}

yeezy();