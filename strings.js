function reversal(inputText) {
	var stringArray = inputText.split('');
	var reverseString = stringArray.reverse().join('');
	output1.innerHTML = "reversal: " + reverseString;
}

function alphabits(inputText) {
	var stringArray = inputText.split('');
	var alphaString = stringArray.sort().join('');
	output2.innerHTML = "alphabits: " + alphaString;
}

function palindrome(inputText) {
	var stringArray = inputText.split('');
	var reverseArray = stringArray.reverse().join('');
	if (inputText===reverseArray) {
		output3.innerHTML = "Your string is a palindrome";
	} 
	else {
		output3.innerHTML = "";
	}

}


var testString = "";
var textBox = document.getElementById("uInput");
var submitButton = document.getElementById("submitInfo");
var output1 = document.getElementById("reversalOutput");
var output2 = document.getElementById("alphaOutput");
var output3 = document.getElementById("palindromeOut");

function whichKey() {
	if(event.keyCode===13) {
		document.getElementById("submitInfo").click();
	}
}
submitButton.addEventListener("click", textEntered)
textBox.addEventListener("keyup", whichKey);
function textEntered () {
	var testString = textBox.value;
	if (testString === ""){
		alert("Please enter text in the box");
	} else {
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}
}