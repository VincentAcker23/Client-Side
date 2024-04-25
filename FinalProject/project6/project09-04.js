"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: 
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
  
    // Check if the document.cookie object exists
    if (document.cookie) {
        // Retrieve the best time from cookies
        let bestTime = getBestTime();
        // Change the text content of the bestText object
        document.getElementById("bestText").textContent = `${bestTime} seconds`;
    }
});

function getBestTime() {
  // Check if the document.cookie object exists
  if (document.cookie) {
      // Split the document cookie text at the "=" character
      let cookieArray = document.cookie.split('=');
      // Convert the cookie value to an integer
      return parseInt(cookieArray[1]);
  } else {
      // If document.cookie object doesn't exist, return a default value of 9999
      return 9999;
  }
}
function updateRecord() {
  // Get the solution time and convert it to an integer
  let solutionTime = parseInt(document.getElementById("timer").textContent);

  // Get the current best time
  let bestTime = getBestTime();

  // If the current solution time is less than the best time, update the best time
  if (solutionTime < bestTime) {
      bestTime = solutionTime;

      // Change the text content of the bestText object
      document.getElementById("bestText").textContent = `${bestTime} seconds`;

      // Write the best time to the document.cookie object with a max age of 90 days
      let expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 90);
      document.cookie = `best=${bestTime};expires=${expirationDate.toUTCString()}`;
  }
}

