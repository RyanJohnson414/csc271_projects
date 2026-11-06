/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/
var usernames = ["JohnH227","RyGuy414","OwenSmmmm"]
var dates = ["2026-10-20","2026-11-3","2026-11-4"]
var reviews = ["Great Movie", "One of my Favorites","Good not Great"]
var diffrate = [4,5,3]

/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/
var reviewcards = document.getElementsByClassName("review-card")

for(var i =0; i < reviewcards.length; i++){
	var rating = reviewcards[i].querySelector(".review-rating");
    var username = reviewcards[i].querySelector(".review-username");
    var date = reviewcards[i].querySelector(".review-date");
    var review = reviewcards[i].querySelector(".review-text");

    // Generate stars
    var stars = "";

    for (var j = 0; j < 5; j++) {
        if (j < diffrate[i]) {
            stars += "★";
        } else {
            stars += "☆";
        }
    }

    rating.textContent = stars + " " + diffrate[i]
	rating.setAttribute("data-rating", diffrate[i])

	username.innerHTML = usernames[i] + " " + dates[i]
	review.innerHTML = reviews[i]



}



// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selectedrating = filterDropdown.value;

	for(var j = 0; j < reviewcards.length;j++){
		var rating = reviewcards[j].querySelector(".review-rating");
		var check = rating.getAttribute("data-rating")
		if (selectedrating == "All" || selectedrating == check) {
            reviewcards[j].style.display = ""; // kept indexing as i instead of j cost me 10 extra minutes
        } else {
            reviewcards[j].style.display = "none";
        }
	}

    /* TO DO:

		- Loop through each card:
		  - Select the current review rating element.
		  - Get its rating attribute value.

		  - Check if the selected rating is 'All' or matches the card's rating.
		  	- If it matches, display the card.
		  	- Otherwise, hide the card

	*/

});



