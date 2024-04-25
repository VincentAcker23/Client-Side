/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost with quantity
      Author: Vincent Acker Jr.
      Date:   4/18/23

      Filename: project03-01.js
*/

//Declare the variable for MenuItems
let menuItems = document.getElementsByClassName("menuItem");
for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click',()=>{
        calcTotal();
    })
}

// Function for calcTotal
function calcTotal(){
    let orderTotal = 0;
    let taxRate = 0.07; // 7% tax rate
    let subtotal = 0;

    for(let i = 0; i < menuItems.length; i++) {
        if(menuItems[i].checked) {
            let quantity = parseInt(document.getElementById("quantity" + (i + 1)).value);
            let itemCost = Number(menuItems[i].value);
            subtotal += itemCost * quantity;
        }
    }
    
    let taxAmount = subtotal * taxRate;
    orderTotal = subtotal + taxAmount;

    document.getElementById("subtotal").innerHTML = formatCurrency(subtotal);
    document.getElementById("taxAmount").innerHTML = formatCurrency(taxAmount);
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
