window.addEventListener("load", getQuote);

const qb = document.querySelector(".new-quote");
qb.addEventListener("click", getQuote);

const api = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote() {
    console.log("button was clicked");
    let text = await fetch(api);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response["message"]);

    displayQuote(json_response["message"]);
}

function displayQuote(x) {
    const fq = document.querySelector("#js-quote-text");
    let textMessage = document.createTextNode(x);

    fq.appendChild(textMessage);

    document.getElementById("js-quote-text").textContent = x;
}

getQuote();