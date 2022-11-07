let guess;
let goal = Math.floor(Math.random() * 10) + 1
let attemptCount = 0
let prevGuess = []
let listGuess = prevGuess.toString()

function play(){
    while(true) {
        guess = prompt("Guess a number between 1 and 10")
        let numGuess = Number(guess)
        if (guess === null) {
            alert("Goodbye")
        }

        if (numGuess === goal) {
            attemptCount++
            if (attemptCount === 1) {
                alert(`That's right! You got it on the first try!`)
                break;
            } else {
                alert(`That's right! It took you ${attemptCount} tries. \nYour previous answers were ${listGuess}`)
                break;
            }
        } else if (numGuess > goal && numGuess <= 10) {
            prevGuess.push(guess)
            attemptCount++
            alert(`Attempt Number: ${attemptCount} \nThe number is lower than your guess. Try again`)
        } else if (numGuess < goal && numGuess >= 1) {
            prevGuess.push(guess)
            attemptCount++
            alert(`Attempt Number: ${attemptCount} \nThe number is higher than your guess. Try again`)
        } else {
            prevGuess.push(guess)
            attemptCount++
            alert(`Attempt Number: ${attemptCount} \nThis is not a number between 1 and 100. Try again`)
        }
    }
}

play(); // This is your main function that runs when the page loads