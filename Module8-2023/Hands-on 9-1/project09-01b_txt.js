"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: 
      Date:   

      Filename: project09-01b.js
*/
"use strict";

/* JavaScript 7th Edition
   Chapter 9
   Project 09-01

   Project to read field values from a query string
   Author: [Your Name]
   Date: [Current Date]
   Filename: project09-01b.js
*/

let query = location.search.slice(1, location.search.length);
query = decodeURIComponent(query);
query = query.replaceAll("+", " ");

let cardFields = query.split("&");
let nameValue, name, value;

for (let x in cardFields) {
   nameValue = cardFields[x].split("=")
   name = nameValue[0];
   value = nameValue[1];
   document.getElementById(name).textContent = value;
}
