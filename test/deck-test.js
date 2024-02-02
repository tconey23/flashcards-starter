const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck')

let card1, card2, card3, deck1

beforeEach(function() {
    card1 = createCard(1, 'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
    card2 = createCard(2, 'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
    card3 = createCard(3, 'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
    deck1 = createDeck([card1, card2, card3])
})

describe('create deck', function () {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function')
  })

  it('should create a deck of cards', function() {
    expect(card1).to.deep.equal({id: 1, question: 'Name the current bassist for Metallica',answers: ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], correctAnswer: 'Robert Trujillo'})
    expect(card2).to.deep.equal({id: 2, question: 'Which of these is not a member of a metal band?',answers: ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], correctAnswer: 'Kenny G'})
    expect(card3).to.deep.equal({id: 3, question: 'What country is the band Mercyful Fate from?',answers: ['Finland','Denmark','United States','Norway'], correctAnswer: 'Denmark'})
  })

  it('should return the correct number of cards in a deck', function () {
    const cardCount = countCards(deck)
    expect(cardCount).to.equal(3)
  })
})