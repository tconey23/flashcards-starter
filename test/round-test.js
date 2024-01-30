const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateAnswer } = require('../src/round')

describe('evaluate guess', function () {
    it('should be a function', function() {
      expect(evaluateAnswer).to.be.a('function')
    })
  
    it('should only proceed if the answer is not blank', function() {
      const card = createCard(3,'What country is the band Mercyful Fate from?', ['Finland','Denmark','United States','Norway'], 'Denmark')
      const checkGuess =  evaluateAnswer(card, "")
      
      expect(checkGuess).to.equal('Your answer cannot be blank')
    })
  
    it('should alert the user if an answer is correct', function() {
      const card = createCard(1,'Name the current bassist for Metallica', ['James Hetfield', 'Cliff Burton', 'Robert Trujillo', 'Kurt Cobain'], 'Robert Trujillo')
      const checkGuess = evaluateAnswer(card, 'Robert Trujillo')
      
      expect(checkGuess).to.equal('Robert Trujillo is correct!')
    })
  
    it('should alert the user if an answer is incorrect', function() {
      const card = createCard(2,'Which of these is not a member of a metal band?', ['Rob Halford', 'Vinnie Paul', 'Kenny G', 'Kirk Hammett'], 'Kenny G')
      const checkGuess = evaluateAnswer(card, 'Vinnie Paul')
      
      expect(checkGuess).to.equal('Sorry, Kenny G is the correct answer!')
    })
  })