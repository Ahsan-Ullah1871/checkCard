// Mobile
function mobile(value) {
	Regulator("value-number", value, 1219, "iphone-price");
}

// case
function phoneCase(value) {
	Regulator("value-number2", value, 59, "case-price");
}

///functions
// value & price
function Regulator(value, isIncrease, priceNum, id) {
	// Determining the value:
	let valueNumber = document.getElementById(value);
	let count = parseInt(valueNumber.value);
	let newCount = count;
	if (isIncrease == true) {
		newCount = count + 1;
	}
	if (newCount > 0 && isIncrease == false) {
		newCount = count - 1;
	}
	valueNumber.value = newCount;

	// Price:
	let PriceNumber = priceNum * valueNumber.value;

	document.getElementById(id).innerText = PriceNumber;

	subtotal(id);
}

// subtotal
function subtotal() {
	let mobilePrice = document.getElementById("iphone-price").innerText;

	let casePrice = document.getElementById("case-price").innerText;

	let total = parseFloat(mobilePrice) + parseFloat(casePrice);

	document.getElementById("sub-total").innerText = total;

	let tax = Math.round(total * 0.1);

	document.getElementById("tax").innerText = tax;

	let totalCost = tax + total;

	return (document.getElementById("total").innerText = totalCost);
}

function remove(id) {
    document.getElementById(id).style.display = "none";
}