// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining the password criteria
var lengthChoice = prompt("How long do you want your password to be? Choose any number between 8 and 128. ");
var upperChoice = confirm("Should your password include uppercase letters? ");
var lowerChoice = confirm("Should your password include lowercase letters? ");
var symbolChoice = confirm("Should your password include symbols? ");
var numberChoice = confirm("Should your password include numbers? ");

//Arrays for letters, symbols, and numbers.
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["`","~","!","@","#","$","%","^","&","*","(",")","?",",",".","{","}","[","]"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

function generatePassword() {

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
