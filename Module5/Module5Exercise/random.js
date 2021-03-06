timeoutID = setTimeout("getQuote();", 2000);

function getQuote() {
  // Create the arrays
  quotes = new Array(4);
  sources = new Array(4);

  //Initialize the arrays with quotes
  quote[0] =
    "When I was a boy of 14, my father was so " +
    "ignorant...but when I got to be 21, I was astonished " +
    "at how much he had learned in 7 years.";
  sources[0] = "Mark Twain";

  quotes[1] = "Everbody is ignorant. Only on different " + "subjects.";
  sources[1] = "Will Rogers";

  quotes[2] =
    "They say such nice things about people at " +
    "their funerals that it makes me sad that I'm going to " +
    "miss mine by just a few days.";
  sources[2] = "Garrison Keillor";

  quotes[3] = "Whats's another word for thesauras?";
  sources[3] = "Steven Wright";

  // Get a random index into the arrays
  i = Math.floor(Math.random() * quotes.length);

  // Write out the quote as HTML
  document.write("<p style='background-color: #ffb6c1' >\"");
  document.write(quotes[i] + '"');
  document.write("<em>- " + sources[i] + "</em>");
  document.write("</p>");
}

/*Code for Swapping Images */
function showImage(image) {
  var largeImg = document.getElementById("large_img");
  largeImg.src = image;
}

if (image.includes("Jellybeans"))
 {
document.getElementById("imgDescr").innerHTML =
    "Jellybeans is a good kids candy whether they want to eat them or just simply count them in a jar.";
}

if (image.includes("Trollies")) {
  document.getElementById("imgDescr").innerHTML =
    "Trollies can be sweet and salty or simply plain.";
}

if (image.includes("MandMs")) {
  document.getElementById("imgDescr").innerHTML =
    "MandMs are a wonderful chocolte snack that you can share.";
}
