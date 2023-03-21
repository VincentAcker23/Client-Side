"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Vincent Acker Jr.
      Date:  3/20/23

      Filename: project06-01.js
*/

// Store all fields in variables
var submitButton = document.getElementById("submitButton");
var pwd = document.getElementById("pwd");
var pwd2 = document.getElementById("pwd2")

// Add click event
submitButton.addEventListener("click", function() {
    // Create a regex pattern for password
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    // if password matches pattern
    if(pwd.value.match(passw)) 
    { 
        // compare both passwords
        if(pwd.value != pwd2.value){
            pwd2.setCustomValidity("Your passwords must match");
            return false;
        }else{
            // if both are same then open new page and submit form
            document.getElementById('signup').action='./formsubmit.html'; 
            document.getElementById('signup').submit(); // Send POST data and go there
            return true;
        }
    }
    else
    { 
        // if pattern does not match
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
        return false;
    }
});