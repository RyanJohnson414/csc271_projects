// Name: Ryan Johnson
// Date: November 4, November 11, November 17, 2026
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


// looked up lists with loops online
var playerStats = ["Skating Speed: 22.89 MPH","Hardest Shot: 82.94 MPH","Shots on Goal: 78","Defensive Zone %: 42.1%","Neutral Zone %: 18.2%","Offensive Zone %: 39.7%"];
var statsList = document.getElementById("playerStats");

if(statsList != null) {
    for (var i = 0; i < playerStats.length; i++) {
        var li = document.createElement("li");
        li.textContent = playerStats[i];
        statsList.appendChild(li);
    }
}

//Function with no parameters and no return value. (basic function)
function displayHockeyFacts() {
    var hockeyfacts = ["The first organized ice hockey game was played in Montreal in 1875.","The Stanley Cup is the oldest professional sports trophy in North America.","The NHL was founded in 1917 with four teams: Montreal Canadiens, Toronto Arenas, Ottawa Senators, and Quebec Bulldogs.","Wayne Gretzky holds the record for most career points in the NHL with 1,963.","The average speed of an NHL player is around 20 mph.","Ice hockey is played with six players on each team: five skaters and one goalie.","The first NHL All-Star Game was held in 1947 in Toronto.","The longest NHL game in history lasted 176 minutes and 30 seconds.","The puck is made of vulcanized rubber and is kept frozen before each game."]

    var factsList = document.getElementById("factsList");

    if (factsList != null) {
        factsList.innerHTML = "";
        for (var i = 0; i < hockeyfacts.length; i++) {
            var li = document.createElement("li");
            li.textContent = hockeyfacts[i];
            factsList.appendChild(li);
        }
    }
}

displayHockeyFacts();

// Function with parameters. ( > 2 parameters)
function recommendPosition(scoring, goalie, defending) {

    if (scoring === "yes" || (goalie === "no" && defending === "no")) {
        return "Forward";
    }

    else if (goalie === "yes") {
        return "Goalie";
    }

    else if (defending === "yes") {
        return "Defenseman";
    }

    return "No recommendation available";
}

// Function that returns a value. (return value)
function calculateTotalPoints(goals, assists) {
    return goals + assists;
}

var submitButton = document.getElementById("submitQuiz");
if(submitButton != null) {
    submitButton.addEventListener("click", function() {

        var scoring = document.querySelector('input[name="scoring"]:checked');
        var goalie = document.querySelector('input[name="goalie"]:checked');
        var defending = document.querySelector('input[name="defending"]:checked');

        var position = "";

        if (scoring === null || goalie === null || defending === null) {
            document.getElementById("positionResult").textContent = "Please answer all three questions!";
        }

     else{
        var position = recommendPosition(scoring.value, goalie.value, defending.value);
        document.getElementById("positionResult").textContent  = "Your recommended hockey position is: " + position + "!";
     }


    });
}

document.getElementById("calculateButton").addEventListener("click", function() {

    var goals = Number(document.getElementById("goals").value);
    var assists = Number(document.getElementById("assists").value);

    var totalPoints = calculateTotalPoints(goals, assists);

    pointsInfo.innerHTML = "Your total points are: <strong>" + totalPoints + "</strong>";
});

