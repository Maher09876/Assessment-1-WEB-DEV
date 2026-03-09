const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

// function to calculate total cost
function calculateCost() {
    const price = parseFloat(priceInput.value);
    const liters = parseFloat(litersInput.value);
    const total = price * liters;
    // show total cost with 2 decimals
    result.textContent = `Total Cost: €${total.toFixed(2)}`;
}

// add click event to button
calculateBtn.addEventListener('click', calculateCost);
