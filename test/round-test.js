const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck')
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')

describe('create round', function() {
    it('should be a function', function() {
        expect(createRound).to.be.a('function')
    })

    it('should create an object containing a round', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [], 0)
        
        expect(round1).to.be.an('object')
    })

    it('should start on the first card of the deck with 0 turns and 0 incorrect guesses', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [])
        
        expect(round1.currentCard.id).to.equal(1)
        expect(round1.turns).to.equal(0)
        expect(round1.incorrectGuesses).to.deep.equal([])
    })
})

describe('take turn', function(){
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function')
    })
    
    it('should increment the turn count by 1 for each guess', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [])
        const turn1 = takeTurn('guess',round1)
        expect(turn1.turns).to.equal(1)
    })

    it('should only increment the turn count by 1 for each guess', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [])
        const turn1 = takeTurn('Robert Trujillo', round1)
        const turn2 = takeTurn('Robert Trujillo', round1)

        expect(turn2.turns).to.equal(2)
    })

    it('should evaluate the guess and store incorrect guesses in the round object', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [])
        const turn1 = takeTurn('guess', round1)
        
        expect(round1.incorrectGuesses).to.deep.equal(['guess'])
    })

    it('should advance to the next card on each turn', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [])
        const turn1 = takeTurn('Robert Trujillo', round1)
        expect(round1.currentCard.id).to.equal(2)
        
        const turn2 = takeTurn('Robert Trujillo', round1)
        expect(round1.currentCard.id).to.equal(3)
    })
})

describe('calculate results', function() {
    it('should be a function', function() {
        expect(calculatePercentCorrect).to.be.a('function')
    })

    it('should calculate the percentage of correct answers', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [])

        const turn1 = takeTurn('Robert Trujillo', round1)
        const turn2 = takeTurn('Kenny G', round1)
        const turn3 = takeTurn('Denmark', round1)

        const percCorrect = calculatePercentCorrect(round1)
        expect(percCorrect).to.equal('100%')
    })
})

describe('end round', function() {
    it.skip('should be a function', function() {
        expect(endRound).to.be.a('function')
    })

    it('should display a message when the round is complete', function() {
        const card1 = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
        const card2 = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
        const card3 = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
        const deck1 = createDeck([card1, card2, card3])

        var round1 = createRound(deck1, deck1[0], 0, [])

        const turn1 = takeTurn('Robert Trujillo', round1)
        const turn2 = takeTurn('Kenny G', round1)
        const turn3 = takeTurn('Denmark', round1)

        const percCorrect = calculatePercentCorrect(round1)
        expect(percCorrect).to.equal('100%')

        const message = endRound(round1)
        console.log(`** Round over! ** You answered ${message} of the questions correctly!`)

        expect(message).to.equal(percCorrect)
    })
})