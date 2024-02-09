function calculateAdCost() {
    // Get values from the form
    const adSize = parseFloat(document.getElementById("adSize").value);
    const costPerSquareInch = parseFloat(document.getElementById("costPerSquareInch").value);

    // Ensure that adSize is a positive number
    if (isNaN(adSize) || adSize <= 0) {
        alert("Invalid ad size. Please enter a positive number.");
        return;
    }

    // Ensure that costPerSquareInch is a positive number
    if (isNaN(costPerSquareInch) || costPerSquareInch <= 0) {
        alert("Invalid cost per square inch. Please enter a positive number.");
        return;
    }

    // Calculate the total cost
    const totalCost = adSize * costPerSquareInch;

    // Display the result
    alert(`The cost of placing the ad is $${totalCost.toFixed(2)}.`);
}