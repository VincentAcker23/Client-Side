/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Vincent Acker JR.
      Date:   

      Filename: project02-02.js
 */
 
      function verifyForm() {
            // Get values from form inputs
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
        
            // Check if all fields are filled out
            if (name && email && phone) {
                window.alert("Thank you!");
            } else {
                window.alert("Please fill in all fields");
            }
        }
        
        // Attach event listener to the Submit button
        document.getElementById("submit").addEventListener("click", verifyForm);