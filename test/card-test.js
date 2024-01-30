const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateAnswer } = require('../src/card');

describe('create card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

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