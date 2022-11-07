let guess;
let goal = 47
let attemptCount = 0

function play(){
    guess = Number(prompt("Guess a number between 1 and 100"))
    while(true) {
        if (guess === goal) {
            attemptCount++
            if (attemptCount === 1) {
                alert(`That's right! You got it on the first try!`)
                break;
            } else {
                alert(`That's right! It took you ${attemptCount} tries.`)
                break;
            }
        } else if (guess > goal && guess <= 100) {
            attemptCount++
            guess = Number(prompt("The number is lower than your guess. Try again"))
        } else if (guess < goal && guess >= 1) {
            attemptCount++
            guess = Number(prompt("The number is higher than your guess. Try again"))
        } else {
            attemptCount++
            guess = Number(prompt("That is not a number between 1 and 100. Try again"))
        }
    }
}

play(); // This is your main function that runs when the page loads