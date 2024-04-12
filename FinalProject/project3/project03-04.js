/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: 
      Date:   

      Filename: project03-04.js
*/

let reviewers = ["Nitensa1", "Reiter", "rn", "Teme"];
let reviewType = ["e", "W", "E", "C"];
let stars = ["*", "*", "*", "*"];
let reviewDates = ["-", "-", "-", "-"];
let reviews = [
  "Favorite Workout Game",
  "Reece raze",
  "Rating FRR",
  "Sn",
];
let reviewTitles = ["My Favorite Workout Game", "Reece raze", "Rating FRR", "Sn"];

// Function to display the customer reviews
function displayReviews() {
  // Access the HTML element where you want to display the reviews
  let reviewContainer = document.querySelector("#review-container");

  // Iterate through the arrays and create HTML elements for each review
  for (let i = 0; i < reviewers.length; i++) {
    // Create the necessary HTML elements
    let reviewDiv = document.createElement("div");
    let reviewTitle = document.createElement("h3");
    let reviewerName = document.createElement("p");
    let reviewContent = document.createElement("p");

    // Set the content for each element based on the corresponding review data
    reviewTitle.textContent = reviewTitles[i];
    reviewerName.textContent = "Reviewer: " + reviewers[i];
    reviewContent.textContent = reviews[i];

    // Append the created elements to the reviewDiv
    reviewDiv.appendChild(reviewTitle);
    reviewDiv.appendChild(reviewerName);
    reviewDiv.appendChild(reviewContent);

    // Append the reviewDiv to the reviewContainer
    reviewContainer.appendChild(reviewDiv);
  }
}

// Call the displayReviews function to populate the customer reviews
displayReviews();