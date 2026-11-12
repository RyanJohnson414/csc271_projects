
/*
Name: Ryan Johnson
Date: November 11, 2026
Description: Recommends a hockey position based on visitor answers for the conditionals. one of the loops displays facts about the game of hockey and parts of its history(hockeyhome.html),
another loop replaces the code in hockeyplayer.html with stats from the for loop will be helpful later on when scaling page.
*/


var hockeyfacts = ["The first organized ice hockey game was played in Montreal in 1875.","The Stanley Cup is the oldest professional sports trophy in North America.","The NHL was founded in 1917 with four teams: Montreal Canadiens, Toronto Arenas, Ottawa Senators, and Quebec Bulldogs.","Wayne Gretzky holds the record for most career points in the NHL with 1,963.","The average speed of an NHL player is around 20 mph.","Ice hockey is played with six players on each team: five skaters and one goalie.","The first NHL All-Star Game was held in 1947 in Toronto.","The longest NHL game in history lasted 176 minutes and 30 seconds.","The puck is made of vulcanized rubber and is kept frozen before each game."]

var factsList = document.getElementById("hockeyFacts");

if(factsList != null) {
    for (let i = 0; i < hockeyfacts.length; i++) {
        let li = document.createElement("li");
        li.textContent = hockeyfacts[i];
        factsList.appendChild(li);
    }
}
// looked up lists with loops online
var playerStats = ["Skating Speed: 22.89 MPH","Hardest Shot: 82.94 MPH","Shots on Goal: 78","Defensive Zone %: 42.1%","Neutral Zone %: 18.2%","Offensive Zone %: 39.7%"];
let statsList = document.getElementById("playerStats");

if(statsList != null) {
    for (let i = 0; i < playerStats.length; i++) {
        let li = document.createElement("li");
        li.textContent = playerStats[i];
        statsList.appendChild(li);
    }
}

let submitButton = document.getElementById("submitQuiz");
if(submitButton != null) {
    submitButton.addEventListener("click", function() {

        var scoring = document.querySelector('input[name="scoring"]:checked');
        var goalie = document.querySelector('input[name="goalie"]:checked');
        var defending = document.querySelector('input[name="defending"]:checked');

        var position = "";

        if (scoring === null || goalie === null || defending === null) {
            document.getElementById("positionResult").textContent = "Please answer all three questions!";
        }

     else if (scoring.value === "yes" || goalie.value === "no" && defending.value === "no") {
            position = "Forward";
        }

        else if (goalie.value === "yes") {
            position = "Goalie";
        }

        else if (defending.value === "yes") {
            position = "Defenseman";
        }

        if (position !== "") {
            document.getElementById("positionResult").textContent ="Your recommended hockey position is: " + position + "!";
        }

    });
}

