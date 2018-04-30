window.onload = function() {


document.getElementById("calculate-button").onclick = function() {
	
	// Input elements with typed numbers.
	var val1 = parseInt(document.getElementById('elem-1').value);
	var val2 = parseInt(document.getElementById('elem-2').value);

	var sum = val1 + val2;

	//chosen operation from radio group.
	var choice = document.querySelector('input[name = "operation"]:checked');
	var operation = choice.value;
	var operationResult = getResult(val1, val2, operation);

	var resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;

	//Return pop up if the val1 and val2 variables are NaN.
	if (isNaN(val1)) {
	 alert("Operacao errada amigo(a);\nDigite um valor na caixa 1 para obter resultado.");
	} else if (isNaN(val2)) {
		alert("Operacao errada amigo(a);\nDigite um valor na caixa 2 para obter resultado.");
	} 
	
}

/**
* Returns the result of an operation over two numbers.
* Arguments: two valid numbers and one operation symbol.
* Supports sum, subtraction, multiplication and division.
*/

function getResult(val1, val2, operation) {
	 if (operation === '+') {
		return val1 + val2;
	} else if (operation === '-') {
		return val1 - val2;
	} else if (operation === '*') {
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;
	}

}

} 

