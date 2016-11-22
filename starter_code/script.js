// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
        var rps = ["rock", "paper", "scissors"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
        var rand = (Math.floor(Math.random()*3));
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
        console.log(rps[rand]);
    // Task 1, Step 4: return this new value
        return rps[rand];
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
       if(userChoice == "rock" && computerChoice == "scissors"){
           var winner="User wins";
       } else if(userChoice == "paper" && computerChoice == "rock"){
           var winner="User wins"
       } else if(userChoice == "scissors" && computerChoice == "paper"){
           var winner="User wins"
       } else if(userChoice == "scissors" && computerChoice == "rock"){
           var winner="Computer wins"
       } else if(userChoice == "paper" && computerChoice == "scissors"){
           var winner="User wins"
       } else if(userChoice == "rock" && computerChoice == "paper"){
           var winner="Computer wins"
       } else if(userChoice == computerChoice){
           var winner="tie"
       }
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    $("#computer-choice").text(computerChoice)
    // Task 5: Show the winner in HTML after the word "Winner:"
    $("#winner").text(winner);
};


    
/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = null;

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = null;
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create click handlers that changes the
    // value of userChoice based on the item the user clicks on the HTML page.
    $("#scissors").click(function() {
        computerChoice = generateComputerChoice();
        userChoice = "scissors";
        pickWinner(userChoice, computerChoice);
    });
    $("#rock").click(function() {
        computerChoice = generateComputerChoice();
        userChoice = "rock";
        pickWinner(userChoice, computerChoice);
    });
    $("#paper").click(function() {
        computerChoice = generateComputerChoice();
        userChoice = "paper";
        pickWinner(userChoice, computerChoice);
    });
    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    //Final Task: comment out the pickWinner function on the line above and place it within your click functions created in Task 3.
    //this is done so the computer does not pick its throw until the user has also done so.
    

});
