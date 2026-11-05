// Name: Ryan Johnson
// Date: November 4, 2026
// Description: JavaScript for Hockey Position Guide and Points Calculator.


var goalieDescription = "The goalie protects the net and stops the puck.";
var defenderDescription = "Defenders protect their team's zone and stop opponents.";
var forwardDescription = "Forwards focus on scoring goals and creating plays.";

var goalieCount = 1;
var defenderCount = 2;
var forwardCount = 3;


var totalPlayers = goalieCount + defenderCount + forwardCount;


var positionInfo = document.getElementById("positionInfo");
var playerCount = document.getElementById("playerCount");
var descriptions = document.getElementsByClassName("descriptor");

var buttons = document.getElementsByTagName("button");

var pointsInfo = document.querySelector(".pointsInfo");


positionInfo.textContent = "Click a position button to learn more!";

playerCount.textContent = "Total players on the ice: " + totalPlayers;

descriptions[0].textContent = "Choose a hockey position below to learn its responsibilities.";


pointsInfo.innerHTML = "Enter your goals and assists to calculate your <strong>total points!</strong>";

buttons[0].textContent = "Goalie";
buttons[1].textContent = "Defenders";
buttons[2].textContent = "Forwards";

// working with buttons I had to search up how to do this used the google response chatbot forgot to screenshot.
document.getElementById("goalieButton").addEventListener("click", function() {
    positionInfo.textContent = goalieDescription;
    playerCount.textContent = "Goalies on the ice: " + goalieCount;
});

document.getElementById("defenderButton").addEventListener("click", function() {
    positionInfo.textContent = defenderDescription;
    playerCount.textContent = "Defenders on the ice: " + defenderCount;
});

document.getElementById("forwardButton").addEventListener("click", function() {
    positionInfo.textContent = forwardDescription;
    playerCount.textContent = "Forwards on the ice: " + forwardCount;
});



document.getElementById("calculateButton").addEventListener("click", function() {

    var goals = Number(document.getElementById("goals").value);
    var assists = Number(document.getElementById("assists").value);

    var totalPoints = goals + assists;

    pointsInfo.innerHTML = "Your total points are: <strong>" + totalPoints + "</strong>";
});