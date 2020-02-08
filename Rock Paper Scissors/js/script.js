/**
 * Andrew Creighton 000207373
 */
/**
 * User Class to make grab values from the user
 */
class User {
    /**
     * Creates a user and sets their name and score
     * @param {string} name the name that the player entered into the form
     */
    constructor(name){
        this.name = name;
        this.score = score;
    }
    /**
     * gets the user name
     */
    getName(){
        return this.name;
    }
    /**
     * gets the score of the user
     */
    getScore(){
        return this.score;
    }
}
/**
 * game object, hold the computer score and the function to get the computers choice 
 */
let game = {
    /**
     * the computers score
     */
    compScore: 0,
    /**
     * generates a random number from 0 - 2 
     */
    compChoice: function () {
        return Math.floor(Math.random() * 3)
    }
}
/**
 * Checks the winner of the Rock Paper Scissors game
 * @param {int} userChoice choice of the user depending on the button clicked
 * @param {int} compChoice randomly generated number that compares to the userChoice
 */
function checkWinner(userChoice, compChoice) {
    //win
    if ((userChoice === 0 && compChoice === 2) || (userChoice === 1 && compChoice === 0) || (userChoice === 2 && compChoice === 1)) {
        user.score.innerHTML++;
        winnerMessage.innerHTML = "How Spooky! You win!";

    }
    //lose
    else if ((userChoice === 0 && compChoice === 1) || (userChoice === 1 && compChoice === 2) || (userChoice === 2 && compChoice === 0)) {
        game.score.innerHTML++;
        winnerMessage.innerHTML = "Oh no! Computer Wins!";
    }
    //draw
    else {
        winnerMessage.innerHTML = "Holy Hannibal! A draw?!";
    }
}
/**
 * get the submitButton button, add an event listener for click
 * when the button is clicked, update the players name label in the score box and hide the form
 */
document.getElementById("submitButton").addEventListener("click", function(){
    user.name = document.getElementById("name").value;
    user.age = document.getElementById("age").value;
    document.getElementById("playerScoreLabel").innerHTML = user.getName() + "<h2> Age: " + user.age + "</h2>";
    document.getElementById("container").style.display = "none";
});
/**
 * event listener for when the page loads, creates a new user, grabs the score and turns images into buttons
 * also adds event listeners for the images
 */
window.addEventListener("load", function () {
    user = new User();
    user.score = document.getElementById("playerScore");
    game.score = document.getElementById("compScore");
    let pumpkin = document.getElementById("pumpkin");
    let skeleton = document.getElementById("skeleton");
    let monster = document.getElementById("monster");
    let winnerMessage = document.getElementById("winnerMessage");
    pumpkin.addEventListener("click", function () {
        checkWinner(0, game.compChoice());
    });
    skeleton.addEventListener("click", function () {
        checkWinner(1, game.compChoice());
    });
    monster.addEventListener("click", function () {
        checkWinner(2, game.compChoice());
    });
});