function createRound(deck, currentCard, turns, incorrectGuesses, percentCorrect) {
    const round = {
      deck: deck,
      currentCard: currentCard, 
      turns: turns,
      incorrectGuesses: incorrectGuesses,
      percentCorrect: percentCorrect,
    }
    return round
  }

  function takeTurn(guess, round) {
    round.turns ++
        if(guess === round.currentCard.correctAnswer) {
            round.currentCard = round.deck[round.turns]
            return 'CORRECT!'
        } else {
            round.incorrectGuesses.push(guess)
            round.currentCard = round.deck[round.turns]
            return 'INCORRECT!'
        }
    }

  function calculatePercentCorrect(round) {
    let percentCorr = (100 - (round.incorrectGuesses.length / round.deck.length) * 100)
        round.percentCorrect = `${percentCorr.toFixed(0)}%`
        return round.percentCorrect
  }

  function endRound(round) {
    console.log('**END OF ROUND**')
    console.log(`Your score is ${calculatePercentCorrect(round)}`)
  }

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}