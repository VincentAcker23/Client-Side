//define the functions
function printCard() {
  var name_line = "<strong>Name: </strong>" + this.name + "<br>\n";
  var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
  var address_line = "<strong> Address: </strong>" + this.address + "<br>\n";
  var phone_line = "<strong>Phone: </strong>" + this.phone + "<br>\n";
  var personal_notes = "<strong>Personal Notes </strong>" + this.personal_notes + "<hr>\n";
  document.write(name_line, email_line, address_line, phone_line,personal_notes);
}

function Card(name, email, address, phone,personal_notes) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.personal_notes = personal_notes
  this.printCard = printCard;
}

var Vincent = new Card(
  "Vincent Acker Jr",
  "lilroyalboi@gmail.com",
  "903 Betsy Dr, Picayune MS 39466",
  "601-590-4932",
  "African American male born and raised in a small town called Picayune." 
);
var Johnny = new Card(
  "Johnny Acker",
  "Johnny@Acker.com",
  "652 Weems Street, Alaska 65423",
  "331-335-3362",
  "Vincent's imaginary friend who shows up unexpectedly."
);
var Hannah = new Card(
  "Hannah Duff",
  "Hannah@Duff.com",
  "142 Anchor Lake Rd, Carriere 39426",
  "601-592-1414",
  "Vincent's One and Only Lover."
);

Vincent.printCard();
Johnny.printCard();
Hannah.printCard();