function evaluateAnswer(card, guess) {
    if(!guess.length == 0){
        if(guess === card.correctAnswer) {
            return `${guess} is correct!`
            } else {
            return `Sorry, ${card.correctAnswer} is the correct answer!`
        }
    } else {
        return 'Your answer cannot be blank'
    }
}

module.exports = {
    evaluateAnswer
}