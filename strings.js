function reversal(inputText) {
	var stringArray = inputText.split('');
	var reverseString = stringArray.reverse().join('');
	reverseStringOutput.innerHTML = "reversal: " + reverseString;
}

function alphabits(inputText) {
	var stringArray = inputText.split('');
	var alphaString = stringArray.sort().join('');
	orderedStringOutput.innerHTML = "alphabits: " + alphaString;
}

function palindrome(inputText) {
	var stringArray = inputText.split('');
	var reverseArray = stringArray.reverse().join('');
	if (inputText===reverseArray) {
		palindromeOutput.innerHTML = "Your string is a palindrome";
	} 
	else {
		palindromeOutput.innerHTML = "";
	}

}


var finalString = "";
var textBox = document.getElementById("uInput");
var submitButton = document.getElementById("submitInfo");
var reverseStringOutput = document.getElementById("reversalOutput");
var orderedStringOutput = document.getElementById("alphaOutput");
var palindromeOutput = document.getElementById("palindromeOut");
var formElement=document.getElementById("submission");
formElement.addEventListener("submit", function(e){
	e.preventDefault();
})

function whichKey() {
	if(event.keyCode===13) {
		document.getElementById("submitInfo").click();
	}
}
submitButton.addEventListener("click", textEntered)
textBox.addEventListener("keyup", whichKey);
function textEntered () {
	var finalString = textBox.value;
	if (finalString === ""){
		alert("Please enter text in the box");
	} else if (textBox.validity.patternMismatch){
	} else {
		reversal(finalString);
		alphabits(finalString);
		palindrome(finalString);
	}
}