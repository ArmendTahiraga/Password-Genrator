import { characters, numbers, symbols } from "./data/data.js";const generate = document.getElementById("generate");
const firstPassword = document.getElementById("first-password");
const firstMessage = document.getElementById("first-message");
const secondPassword = document.getElementById("second-password");
const secondMessage = document.getElementById("second-message");
const optionNumbers = document.getElementById("option-numbers");
const optionSymbols = document.getElementById("option-symbols");
const length = document.getElementById("set-length");
let hasNumbers = false;
let hasSymbols = false;
let passwordLength = 15;

length.addEventListener("keydown", setPasswordLength);
generate.addEventListener("click", generatePassword);

function setPasswordLength() {
	if (document.getElementById("set-length").value) {
		passwordLength = document.getElementById("set-length").value;
	}
}

optionNumbers.hasNumbers = false;
optionSymbols.hasSymbols = false;

optionNumbers.addEventListener("click", function () {
	handleOptionNumbersClick();
	let variable = document.getElementById("option-numbers").hasNumbers;
	if (variable) {
		document.getElementById("option-numbers").style.border = "none";
		document.getElementById("option-numbers").hasNumbers = false;
	} else {
		document.getElementById("option-numbers").style.border = "2px solid #10B981";
		document.getElementById("option-numbers").hasNumbers = true;
	}
});

optionSymbols.addEventListener("click", function () {
	handleOptionSymbolsClick();
	let variable = document.getElementById("option-symbols").hasSymbols;
	if (variable) {
		document.getElementById("option-symbols").style.border = "none";
		document.getElementById("option-symbols").hasSymbols = false;
	} else {
		document.getElementById("option-symbols").style.border = "2px solid #10B981";
		document.getElementById("option-symbols").hasSymbols = true;
	}
});

function handleOptionNumbersClick() {
	hasNumbers = true;
	return hasNumbers;
}
function handleOptionSymbolsClick() {
	hasSymbols = true;
	return hasSymbols;
}

function generatePassword() {
	firstPassword.textContent = "";
	secondPassword.textContent = "";

	const hasNumbers = document.getElementById("option-numbers").hasNumbers;
	const hasSymbols = document.getElementById("option-symbols").hasSymbols;
	let result;

	if (hasNumbers === true && hasSymbols === true) {
		result = characters.concat(numbers, symbols);
	} else if (hasNumbers === true) {
		result = characters.concat(numbers);
	} else if (hasSymbols === true) {
		result = characters.concat(symbols);
	} else {
		result = characters;
	}

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * result.length);
		firstPassword.textContent += result[randomIndex];
	}

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * result.length);
		secondPassword.textContent += result[randomIndex];
	}

	firstPassword.style.cursor = "pointer";
	secondPassword.style.cursor = "pointer";

	firstPassword.addEventListener("click", () => {
		document.execCommand("copy");
	});

	firstPassword.addEventListener("copy", (event) => {
		event.preventDefault();
		if (event.clipboardData) {
			event.clipboardData.setData("text/plain", firstPassword.textContent);
		}
		firstMessage.style.animation = "appear 1s ease-in-out";

		setTimeout(() => (firstMessage.style.animation = ""), 1500);
	});

	secondPassword.addEventListener("click", () => {
		document.execCommand("copy");
	});

	secondPassword.addEventListener("copy", (event) => {
		event.preventDefault();
		if (event.clipboardData) {
			event.clipboardData.setData("text/plain", secondPassword.textContent);
		}
		secondMessage.style.animation = "appear 1s ease-in-out";

		setTimeout(() => (secondMessage.style.animation = ""), 1500);
	});
}
