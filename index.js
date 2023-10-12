const beginBtn = document.getElementById("begin-button");
const higherBtn = document.getElementById("higher-button");
const lowerBtn = document.getElementById("lower-button");
const cardContainer = document.getElementById("card-container");
const score = document.getElementById("score")
const cardsRemaining = document.getElementById("cards-remaining")

let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let previousCardValue;
let currentCardValue;
let cardsLeft = deck.length;

function getCardFromDeck() {
    return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
}


function resetGame() {
    beginBtn.style["display"] = "inline-block";
    higherBtn.style["display"] = "none";
    lowerBtn.style["display"] = "none";
    lowerBtn.style["display"] = "none";
    beginBtn.textContent = "TRY AGAIN";
}

beginBtn.addEventListener("click", function() {
    deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    previousCardValue;
    currentCardValue;
    cardsLeft = deck.length;
    beginBtn.style["display"] = "none";
    higherBtn.style["display"] = "inline-block";
    lowerBtn.style["display"] = "inline-block";
    lowerBtn.style["display"] = "inline-block";
    cardsRemaining.style["color"] = "#5D77A3";
    currentCardValue = getCardFromDeck();
    cardsLeft--;
    cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
    cardsRemaining.textContent = `${cardsLeft} cards remaining`;
})

higherBtn.addEventListener("click", function() {
    if (cardsLeft == 1) {
        previousCardValue = currentCardValue;
        currentCardValue = getCardFromDeck();
        cardsLeft--;

        if (currentCardValue > previousCardValue) {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.style["color"] = "#E8AF35";
            cardsRemaining.textContent = `Winner winner chicken dinner!`;

            beginBtn.style["display"] = "inline-block";
            higherBtn.style["display"] = "none";
            lowerBtn.style["display"] = "none";
            lowerBtn.style["display"] = "none";
        } else {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.textContent = `Failed on 1 card remaining`;
            resetGame();
        }
    } else {
        previousCardValue = currentCardValue;
        currentCardValue = getCardFromDeck();
        cardsLeft--;

        if (currentCardValue > previousCardValue) {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.textContent = `${cardsLeft} cards remaining`;
        } else {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.textContent = `Failed on ${cardsLeft + 1} cards remaining`;
            resetGame();
        }
    }
})

lowerBtn.addEventListener("click", function() {
    if (cardsLeft == 1) {
        previousCardValue = currentCardValue;
        currentCardValue = getCardFromDeck();
        cardsLeft--;

        if (currentCardValue < previousCardValue) {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.style["color"] = "#E8AF35";
            cardsRemaining.textContent = `Winner winner chicken dinner!`;
            beginBtn.style["display"] = "inline-block";
            higherBtn.style["display"] = "none";
            lowerBtn.style["display"] = "none";
            lowerBtn.style["display"] = "none";
        } else {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.textContent = `Failed on 1 card remaining`;
            resetGame();
        }
    } else {
        previousCardValue = currentCardValue;
        currentCardValue = getCardFromDeck();
        cardsLeft--;

        if (currentCardValue < previousCardValue) {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.textContent = `${cardsLeft} cards remaining`;
        } else {
            cardContainer.innerHTML = `<img src="images/${currentCardValue}.svg">`;
            cardsRemaining.textContent = `Failed on ${cardsLeft + 1} cards remaining`;
            resetGame();
        }
    }
})