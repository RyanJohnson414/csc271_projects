/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/
var movies = ["Blade Runner","Lawrence of Arabia","Barry Lyndon"]
var posters = ["https://static.wikia.nocookie.net/bladerunner/images/e/e0/Blade-runner-directors-cut-poster--large-msg-119325148375.jpg/revision/latest?cb=20110425200646","https://upload.wikimedia.org/wikipedia/commons/c/c5/Lawrence_of_arabia_ver3_xxlg.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original","https://upload.wikimedia.org/wikipedia/en/e/ee/Barry_Lyndon_A.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"]
var links = ["blade-runner.html"] // I am only doing 1 page.
var ratings = [5,3,4]

/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/

var movieCards = document.getElementsByClassName("movie-card");
for(var i = 0; i < movieCards.length;i++){
	var image = movieCards[i].querySelector("img");
    var link = movieCards[i].querySelector("a");
    var rating = movieCards[i].querySelector(".rating");


	image.src = posters[i];
    image.alt = movies[i];

	link.href = links[0]; // singular page
    link.textContent = movies[i];

	var stars = "";

	for (var j = 0; j < 5; j++) {
	    if (j < ratings[i]) {
	        stars += "★";
	    } else {
	        stars += "☆";
	    }
	}

	rating.textContent = stars;
}
