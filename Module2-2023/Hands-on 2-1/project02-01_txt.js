/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Vincent Acker Jr      
      Date:   1/25/23

      Filename: project02-01.js
 */
          function convert() {
            var degF = document.getElementByID("fValue").Value;
            var degC = (degF - 32) * (5 / 9);
            
          document.getElementByID("cValue").innerHTML = degC;
          }
          document.getElementByID("cbutton").addEventListener("click", convert, false);



