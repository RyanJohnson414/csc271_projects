/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/
var bladerunnermovie = ["Blade Runner", "https://static.wikia.nocookie.net/bladerunner/images/e/e0/Blade-runner-directors-cut-poster--large-msg-119325148375.jpg/revision/latest?cb=20110425200646",5,"Set in an alternate technologically advanced 2019 an bladerunner named Deckhart is tasked with tracking down and eliminating 4 replicants, who are trying to find their creator to change their 4 year age limit before they die. Through his tracking he falls in love with a replicant rachel who believes herself to be real and confuses deckhart on his mission and on what it means to be human, he continues his mission eliminating them one by one until his confrentation in the rain on the roof with the replicant known as Roy Batty who delivers the tears in rain speech that is so famous from the movie before his age limit is reached."]

var movieImage = document.querySelector(".movie-image");
var movieName = document.querySelector(".movie-name");
var movieDescription = document.querySelector(".description");
var movieRating = document.querySelector(".rating");

movieImage.src = bladerunnermovie[1];
movieImage.alt = bladerunnermovie[0];

movieName.textContent = bladerunnermovie[0];
movieDescription.textContent = bladerunnermovie[3];

var stars = "";

for (var i = 0; i < 5; i++) {
    if (i < bladerunnermovie[2]) {
        stars += "★";
    } else {
        stars += "☆";
    }
}

movieRating.textContent = stars;