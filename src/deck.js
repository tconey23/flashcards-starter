function createDeck(cards) {
    deck = cards
   return deck
}

function countCards(deck) {
    return deck.length
}

module.exports = {
    createDeck,
    countCards
}