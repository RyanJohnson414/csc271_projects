// Name: Ryan Johnson
// Date 11/25/2026
// Description: JavaScript file that validates input and handles events for the points calculator.


var pointsForm = document.getElementById("pointsForm");

var goalsInput = document.getElementById("goals");
var assistsInput = document.getElementById("assists");

var goalsFeedback = document.getElementById("goalsFeedback");
var assistsFeedback = document.getElementById("assistsFeedback");
var formFeedback = document.getElementById("formFeedback");

var pointsInfo = document.querySelector(".pointsInfo");

pointsInfo.innerHTML = "Enter your goals and assists to calculate your <strong>total points!</strong>";

function onGoalsFocus() {
    goalsFeedback.textContent = "Enter a whole number of goals that is 0 or greater.";
}
function onAssistsFocus() {
    assistsFeedback.textContent = "Enter a whole number of assists that is 0 or greater.";
}
goalsInput.addEventListener("focus", onGoalsFocus);
assistsInput.addEventListener("focus", onAssistsFocus);

function validateGoals() {

    var goals = Number(goalsInput.value);

    if (goalsInput.value === "" || goals < 0 || goals % 1 !== 0) {

        goalsFeedback.textContent = "Error: Enter a non-negative whole number.";

        return false;

    } else {

        goalsFeedback.textContent = "Valid number of goals.";

        return true;
    }
}

function validateAssists() {
    var assists = Number(assistsInput.value);
    if (assistsInput.value === "" || assists < 0 || assists % 1 !== 0) {
        assistsFeedback.textContent = "Error: Enter a non-negative whole number.";
        return false;
    } else {
        assistsFeedback.textContent = "Valid number of assists.";
        return true;
    }
}

goalsInput.addEventListener("blur", validateGoals);
assistsInput.addEventListener("blur", validateAssists);

function calculatePoints() {

    
    var validGoals = validateGoals();
    var validAssists = validateAssists();

    if (validGoals && validAssists) {
        var goals = Number(goalsInput.value);
        var assists = Number(assistsInput.value);
        var totalPoints = goals + assists;
        pointsInfo.innerHTML = "Your total points are: <strong>" + totalPoints + "</strong>";
        formFeedback.textContent = "Your responses were successfully recorded.";
    } else {
        pointsInfo.textContent = "Unable to calculate points.";
        formFeedback.textContent = "Please correct your inputs before submitting.";
    }
}

pointsForm.addEventListener("submit", calculatePoints);