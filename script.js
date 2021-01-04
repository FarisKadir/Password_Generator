// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defining variables that will be used later on.
var lengthChoice = "";
var upperChoice = "";
var lowerChoice = "";
var symbolChoice = "";
var numberChoice = "";
var confirmation = false;



//Asks the user for their password criteria.
function passwordCriteria() {
  lengthChoice = prompt("How long do you want your password to be? Choose any number including or between 8 and 128. ");

  while  (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    var lengthChoice = prompt("You didn't choose a valid answer, how long do you want your password to be? Choose any number including or between 8 and 128. ");
  }

  upperChoice = confirm("Should your password include uppercase letters? ");
  lowerChoice = confirm("Should your password include lowercase letters? ");
  symbolChoice = confirm("Should your password include symbols? ");
  numberChoice = confirm("Should your password include numbers? ");

  confirmation = confirm("Here are your selections:\n\nWhat is the password length? " + lengthChoice + "\nInclude uppercase letters?  " + upperChoice + "\nInclude lowercase letters?  " + lowerChoice + "\nInclude symbols? " + symbolChoice + "\nInclude numbers?  " + numberChoice +"\n\nPress 'OK' to confirm or press 'Cancel' to pick your password criteria again. ");
}

//Prompt the user to make selections for their password criteria until they confirm their criteria.
while (confirmation === false)  {
  passwordCriteria();
}

window.alert("Click the 'Generate Password' button to create your password using the criteria you selected.");


//Generates a random password that uses the password criteria defined by the user.
function generatePassword() {

//Arrays for letters, symbols, and numbers.
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["`","~","!","@","#","$","%","^","&","*","(",")","?",",",".","{","}","[","]"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var

for (var i = 0; i < lengthChoice.length; i++) {
//Step 1 pick a value from one of the arrays above, based on the user selection.
  //must only include arrays that are "true" based on the user confirmations.
//Step 2 add that value to an array for the password.
//Step 3 do this as many times as the length of the password which was chosen by the user.
//Step 4 Shuffle the array randomly. Use Durstenfield shuffle.
//Step 5 Return a concatentaion of all the array elements, without any delimiters.

}


return "this is your password";

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
