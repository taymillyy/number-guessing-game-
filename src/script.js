let minimum = 1;
let maximum = 100;
let answer = Math.floor(Math.random() *(maximum - minimum +1));
let attempts = 0;
let guess;
let running = true;

while (running) {

    guess = prompt(`Guess a number between ${minimum} and ${maximum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        alert("Please enter a valid number");
    } 
    else if (guess < minimum || guess > maximum){
        alert("Number must be between ${minimum} and ${maximum}");
    } 
    else {
        attempts++;
        if(guess < answer){
        alert( "TOO LOW! TRY AGAIN");
        } 
        else if(guess > answer){
        alert( "TOO HIGH! TRY AGAIN");
        }
        else {
        alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
        running = false;
        }
    } 
     
    
}