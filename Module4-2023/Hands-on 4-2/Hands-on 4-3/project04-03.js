// TODO: 3: ASKING FOR STRICT INTERPRETATION
'use strict';

// TODO 6: ADDED ONE MORE FORWARD SLASH TO FIX THE COMMENT ERROR 
// Maximum Length of Review
const MAX_COUNT = 1000;
document.getElementById("limit").innerHTML = MAX_COUNT;

// Reference to elemets in the web page
// TODO 6: USING const KEYWORD TO DECLARE THE VARIABLES. EARLIER NO VARIABLE DECLARATION KEYWORD WAS USED
const wordCountBox = document.getElementById("countValue");
const warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
// TODO 6: keyup IS SUPPOSED TO BE A STRING
document.getElementById("comment").addEventListener('keyup', updateCount);

// Function to update the count with each keyup event
function updateCount() {
  // Set the warning box to an empty text string
  warningBox.innerHTML = "";

  // Count the number of characters in the comment box
  // TODO 6: USING const KEYWORD TO DECLARE THE VARIABLES
  const commentText = document.getElementById("comment").value;
  const charCount = countCharacters(commentText); // TODO 6: FIX THE TYPE IN THE NAME

  // TODO: 4: TRY CATCH
  try {
    // if the char count is greater than the value of the MAX_REVIEW constant then throw an exception
    if (charCount > MAX_COUNT) {
      throw 'You have exceeded the character count limit.'
    }
  } catch (e) {
    // if an exception is caught then display the error message
    warningBox.innerHTML = e
  } finally {
    // this will execute irrespective of if exception was thrown or not
    wordCountBox.innerHTML = charCount
  }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}
