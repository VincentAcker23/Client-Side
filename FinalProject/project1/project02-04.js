var CHICKEN_PRICE = 10.95;
var HALIBUT_PRICE = 13.95;
var BURGER_PRICE = 9.95;
var SALMON_PRICE = 18.95;
var SALAD_PRICE = 7.95;

var SALES_TAX = 0.07;

document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

function calcTotal() {
	var cost = 0.0;

	var buy_chicken = document.getElementById("chicken").checked;
	var buy_halibut = document.getElementById("halibut").checked;
	var buy_burger = document.getElementById("burger").checked;
	var buy_salmon = document.getElementById("salmon").checked;
	var buy_salad = document.getElementById("salad").checked;

	if (buy_chicken == true)
	 {
		cost += CHICKEN_PRICE;
	}
	if (buy_halibut == true) 
	{
		cost += HALIBUT_PRICE;
	}
	if (buy_burger == true) 
	{
		cost += BURGER_PRICE;
	}
	if (buy_salmon == true) 
	{
		cost += SALMON_PRICE;
	}
	if (buy_salad == true) 
	{
		cost += SALAD_PRICE;
	}

	var tax = cost * SALES_TAX;
	var totalCost = cost + tax;

	document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
	document.getElementById("foodTax").innerHTML = formatCurrency(tax);
	document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

function formatCurrency(cost)
 {
	return '$' + parseFloat(cost).toFixed(2);
}