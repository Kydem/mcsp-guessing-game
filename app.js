let userName = prompt("Please enter your name.")
if (userName == null) {
    userName = "Stranger"
}

let highScores = {};
highScores[userName] = 0

function play(){
    let guess;
    let attemptCount = 0
    let prevGuess = []
    let goal = Math.floor(Math.random() * 10) + 1
    while(true) {
        guess = prompt(`Ok ${userName}, guess a number between 1 and 10`)
        let numGuess = Number(guess)
        prevGuess.push(guess)
        if (guess === null) {
            alert(`Goodbye ${userName}.`)
            break;
        }

        if (numGuess === goal) {
            attemptCount++
            if (attemptCount === 1) {
                alert(`That's right, ${userName}! You got it on the first try!`)
                if (highScores[userName] > attemptCount || highScores[userName] === 0) {
                    highScores[userName] = attemptCount
                    alert(`Your new High Score is ${highScores[userName]}`)
                } else {
                    alert(`Your High Score is ${highScores[userName]}`)
                }
                break;
            } else {
                alert(`That's right, ${userName}! It took you ${attemptCount} tries. \nYour answers were ${prevGuess.join(", ")}`)
                if (highScores[userName] > attemptCount || highScores[userName] === 0) {
                    highScores[userName] = attemptCount
                    alert(`Your new High Score is ${highScores[userName]}`)
                } else {
                    alert(`Your High Score is ${highScores[userName]}`)
                }
                break;
            }
        } else if (numGuess > goal && numGuess <= 10) {
            attemptCount++
            alert(`Attempt Number: ${attemptCount} \nThe number is lower than your guess. Try again`);
        } else if (numGuess < goal && numGuess >= 1) {
            attemptCount++
            alert(`Attempt Number: ${attemptCount} \nThe number is higher than your guess. Try again`);
        } else {
            attemptCount++
            alert(`Attempt Number: ${attemptCount} \nThis is not a number between 1 and 100. Try again`);
        }
    }
    playAgain = prompt(`Would you like to play again, ${userName}? \nType "yes" or "no".`)
    // use .confirm instead of prompt if prompt doesnt work
    if (playAgain.toLowerCase() === "yes") {
        play()
    } else {
        alert(`Goodbye ${userName}.`)
    }

}

play(); // This is your main function that runs when the page loads