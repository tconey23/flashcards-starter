function createRound(deck, currentCard, turns, incorrectGuesses, percentCorrect) {
    const round = {
      deck: deck,
      currentCard: currentCard, 
      turns: turns,
      incorrectGuesses: incorrectGuesses,
    }
    return round
  }

  function takeTurn(guess, round) {
    round.turns ++
        if(guess === round.currentCard.correctAnswer) {
            round.currentCard = round.deck[round.turns]
            return {
              message: 'correct!',
              turns: round.turns
            }
        } else {
            round.incorrectGuesses.push(guess)
            round.currentCard = round.deck[round.turns]
            return {
              message: 'incorrect!',
              turns: round.turns
            }
        }
    }

  function calculatePercentCorrect(round) {
    let percentCorr = (100 - (round.incorrectGuesses.length / round.deck.length) * 100)
        return `${percentCorr.toFixed(0)}%`
  }

  function endRound(round) {
    message = (`Your score is ${calculatePercentCorrect(round)}`)
    console.log('**END OF ROUND**')
    console.log(message)
    return message
  }

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}