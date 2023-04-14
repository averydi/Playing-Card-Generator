/* eslint-disable */

import "./style.css";

function cardPicker() {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  const cards = [];
  for (let st = 0; st < suits.length; st++) {
    for (let nb = 0; nb < numbers.length; nb++) {
      const number = numbers[nb];
      const suit = suits[st];
      cards.push({ number, suit });
    }
  }
  return cards;
}

const cards = cardPicker();
randomCard(cards);

function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardNumber = cards[random].number;
  const cardSuit = cards[random].suit;
  let character;
  cardSuit === "Diamonds"
    ? (character = "&diams;")
    : (character = "&" + cardSuit.toLowerCase() + ";");
  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-character-suit top">' +
    cardNumber +
    character +
    "</span>" +
    '<span class="card-character">' +
    cardNumber +
    "</span>" +
    '<span class="card-character-suit bot">' +
    cardNumber +
    character +
    "</span>";
  document.body.appendChild(card);
}
