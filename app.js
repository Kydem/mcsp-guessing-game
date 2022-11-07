let guess;
let goal = Math.floor(Math.random() * 10) + 1
let attemptCount = 0
const prevGuess = []

function play(){
    while(true) {
        guess = prompt("Guess a number between 1 and 10")
        let numGuess = Number(guess)
        prevGuess.push(guess)
        if (guess === null) {
            alert("Goodbye")
            break;
        }

        if (numGuess === goal) {
            attemptCount++
            if (attemptCount === 1) {
                alert(`That's right! You got it on the first try!`)
                break;
            } else {
                alert(`That's right! It took you ${attemptCount} tries. \nYour previous answers were ${prevGuess.join(", ")}`)
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
}

play(); // This is your main function that runs when the page loads