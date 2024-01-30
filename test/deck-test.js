const chai = require('chai');
const expect = chai.expect;

const { createCard, createDeck, countCards} = require('../src/card');

describe('create deck', function () {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function')
  })

  it('should create a deck of cards', function() {
    const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
    const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
    const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
    
    const deck = createDeck([card1, card2, card3])

    expect(card1).to.deep.equal({id: 1, question: 'Name the current bassist for Metallica',answers: ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], correctAnswer: 'Robert Trujillo'})
    expect(card2).to.deep.equal({id: 2, question: 'Which of these is not a member of a metal band?',answers: ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], correctAnswer: 'Kenny G'})
    expect(card3).to.deep.equal({id: 3, question: 'What country is the band Mercyful Fate from?',answers: ['Finland','Denmark','United States','Norway'], correctAnswer: 'Denmark'})
    
  })

  it('should return the correct number of cards in a deck', function () {
    const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
    const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
    
    const deck = createDeck([card1, card2])

    const cardCount = countCards(deck)

    expect(cardCount).to.equal(2)
  })
})