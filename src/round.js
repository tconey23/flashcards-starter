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
    if(round.turns !== round.deck.length) {
        if(guess === round.currentCard.correctAnswer) {
            console.log('Correct!')
            round.currentCard = round.deck[round.turns]
            return round
        } else {
            round.incorrectGuesses.push(guess)
            round.currentCard = round.deck[round.turns]
            console.log('Incorrect!')
            return round
        }
    } else {
        endRound(round)
    }
  }

  function calculatePercentCorrect(round) {
    let percentCorr = (100 - (round.incorrectGuesses.length / round.deck.length) * 100)
        round.percentCorrect = `${percentCorr.toFixed(0)}%`
        return round.percentCorrect
  }

  function endRound(round) {
    return `${calculatePercentCorrect(round)}`
  }

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}