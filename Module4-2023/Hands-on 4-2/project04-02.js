// code for javascript to have the strict mode on
"use strict";

/*    JavaScript 7th Edition
      Chapter 4
      Project 04-02

      Application to display a random Jane Austen Quote
      Author: John doe
      Date: 17/2/2022

      Filename: project04-02.js
*/

// Array of Jane Austen Quotes
let quotes = [
  "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
  "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
  "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
  "Life seems but a quick succession of busy nothings.",
  "Our scars make us know that our past was for real.",
  "I cannot speak well enough to be unintelligible.",
  "One cannot be always laughing at a man without now and then stumbling on something witty.",
  "Men were put into the world to teach women the law of compromise.",
  "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid.",
];

// Run the quote generator every time the page loads
window.addEventListener("load", quoteGenerator);

// Function to generate and display a random quote
function quoteGenerator() {
  // Number of quotes in the array
  // Code Fix: declare the variable using "let" keyword
  let quoteCount = quotes.length; // is 10

  // Generate a random integer to select a quote
  // Code Fix: declare the variable using "let"
  // LOGICAL Error fix: Get value of random number from 0 to 9 instead of 0 to 10 because the array of "quotes" has 10 elements from index 0 to index 9
  // Hence, use randomInt(0, quoteCount - 1) instead of randomInt(0, quoteCount)
  let randomQuote = randomInt(0, quoteCount - 1);

  // Retrieve a randomly-selected quote
  // Code Fix: use "randomQuote" as the name of variable instead of "randomQuotes"
  // Code Fix: declare the variable using "let" keyword
  let quote = quotes[randomQuote];

  // console.log(randomQuote);

  // Display the random quote
  // Code Fix: It's getElementsByTagName() method instead of getElementByTagName() to get the <blockquote> element
  // Code Fix: Get first element by using [0] index instead of [1] since the 1st element of array is at index 0 in array
  document.getElementsByTagName("blockquote")[0].innerHTML = quote;
}

/*=================================================================*/
// Function to return a randomly-selected integer between lowest and highest, inclusive
function randomInt(lowest, highest) {
  let size = highest - lowest + 1;
  return Math.floor(lowest + size * Math.random());
}
