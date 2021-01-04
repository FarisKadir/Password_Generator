// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = prompt("How long do you want your password to be? Choose any number between 8 and 128. ");
var upper = confirm("Should your password include uppercase letters? ");
var lower = confirm("Should your password include lowercase letters? ");
var symbols = confirm("Should your password include symbols? ");
var numbers = confirm("Should your password include numbers? ");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
