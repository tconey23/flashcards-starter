const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('./card');
const { createDeck, countCards } = require('./deck')
const { createRound } = require('./round')

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  let cards = []
  prototypeQuestions.forEach((card) => {
    cards.push(createCard(card.id, card.question, card.answers, card.correctAnswer))
    })
  const deck = createDeck(cards)
  const round = createRound(deck, deck[0], 0, [], 0)
  printMessage(deck)
  printQuestion(round)
}
module.exports = { printMessage, printQuestion, start, countCards, createCard, createDeck, createRound };
