//define the functions
function printCard() {
    var name_line= "<strong>Name: </strong>" + this.name + "<br>\n";
    var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
    var address_line= "<strong>Address: </strong>" + this.address + "<br>\n";
    var phone_line= "<strong>Phone: </strong>" + this.phone + "<br>\n";
    document.write(name_line, email_line, address_line, phone_line);
}