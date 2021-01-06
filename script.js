// Pseudocode
// //Step 1 pick a value from one of the arrays above, based on the user selection.
//   //must only include arrays that are "true" based on the user confirmations.
// //Step 2 add that value to an array for the password.
// //Step 3 do this as many times as the length of the password which was chosen by the user.
// //Step 4 Shuffle the array randomly. Use Durstenfield shuffle.
// //Step 5 Return a concatentaion of all the array elements, without any delimiters.


// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defining variables that will be used later on.
var lengthChoice = 0;
var upperChoice = "";
var lowerChoice = "";
var symbolChoice = "";
var numberChoice = "";
var upperChar = "";
var lowerChar = "";
var symbolChar = "";
var numberChar = "";
var confirmation = false;
var randoArr = [];
var password = "";


//Arrays for uppercase and lowercase letters, symbols, and numbers.
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["`","~","!","@","#","$","%","^","&","*","(",")","?",",",".","{","}","[","]"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];



//Fucntion that prompts the user for the password length
function passwordLength() {
  lengthChoice = prompt("How long do you want your password to be? Choose any number including or between 8 and 128. ");
}

 
//Function that asks for the password criteria
function passwordCriteria()  {
  upperChoice = confirm("Should your password include uppercase letters? ");
  lowerChoice = confirm("Should your password include lowercase letters? ");
  symbolChoice = confirm("Should your password include symbols? ");
  numberChoice = confirm("Should your password include numbers? ");
}


//Function that selects a random character from one of the password criteria arrays and places it in a temporary array.
function randoChar(x)  {
  if (password.length < lengthChoice) {
    random = Math.floor(Math.random() * x.length);
    char = x[random];
    randoArr.push(char);
    shuffle(randoArr);
    password = randoArr.join("");
  }
}

//Found this code that uses Fisher-Yates Shuffle to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generatePassword()  {
  for (var i = 0; i < lengthChoice; i++) {
    i = i++;
    if (upperChoice && lowerChoice && symbolChoice && numberChoice) {
      randoChar(upperCase);
      
      randoChar(lowerCase);

      randoChar(numbers);

      randoChar(symbols);
      
    } else if (upperChoice && lowerChoice && numberChoice)  {
        randoChar(upperCase);
        
        randoChar(lowerCase);

        randoChar(numbers);
      } else if (upperChoice && lowerChoice && symbolChoice)  {
        randoChar(upperCase);
        
        randoChar(lowerCase);

        randoChar(symbols);

        } else if (upperChoice && symbolChoice && numberChoice)  {
        randoChar(upperCase);
        
        randoChar(symbols);

        randoChar(numbers);

          } else if (symbolChoice && lowerChoice && numberChoice)  {
            randoChar(symbols);
            
            randoChar(lowerCase);
    
            randoChar(numbers);
            } else if (upperChoice && lowerChoice)  {
              randoChar(upperCase);
              
              randoChar(lowerCase);
              } else if (upperChoice && numberChoice)  {
                randoChar(upperCase);
                
                randoChar(numbers);
                } else if (upperChoice && symbolChoice)  {
                  randoChar(upperCase);
                  
                  randoChar(symbols);
                  } else if (lowerChoice && numberChoice)  {
                    randoChar(lowerCase);
                    
                    randoChar(numbers);
                    } else if (lowerChoice && symbolChoice)  {
                      randoChar(lowerCase);
                      
                      randoChar(symbols);
                      } else if (numberChoice && symbolChoice)  {

                        randoChar(numbers);
                        
                        randoChar(symbols);

                        } else if (upperChoice)  {

                          randoChar(upperCase);

                          } else if (lowerChoice)  {

                            randoChar(lowerCase);
                            
                          } else if (numberChoice)  {

                            randoChar(numbers);
                            
                          } else if (symbolChoice)  {

                            randoChar(symbols);
                            
                          }
  }

  console.log(randoArr);
  console.log(password);
  console.log(password.length);

  return password;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



//Ask the user for the password length
passwordLength();

//Ask them for the password length again if they did not choose a number, or did not choose a number between 8 and 128.
while  (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
  alert("Please make sure you are choosing a number between 8 and 128! Let's try this again!")
  passwordLength();
}


//Ask the user for their password criteria
passwordCriteria();

//Ask the user for their password criteria again, if they did not choose any criteria.
while (upperChoice === false && lowerChoice === false && symbolChoice === false && numberChoice === false)  {
  alert("You must pick at least one password criteria! Let's try this again!");
  passwordCriteria();
}


//Ask the user to confirm their selections
confirmation = confirm("Here are your selections:\n\nWhat is the password length? " + lengthChoice + "\nInclude uppercase letters?  " + upperChoice + "\nInclude lowercase letters?  " + lowerChoice + "\nInclude symbols? " + symbolChoice + "\nInclude numbers?  " + numberChoice +"\n\nPress 'OK' to confirm or press 'Cancel' to pick your password criteria again. ");


//Prompt the user again to make selections for their password criteria until they confirm their criteria.
while (confirmation === false)  {
  passwordLength();
  passwordCriteria();
}

//Asks the user to click the Generate button to have the password created.
window.alert("Click the 'Generate Password' button to create your password using the criteria you selected.");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
