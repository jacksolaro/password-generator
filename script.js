// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: create generatePassword() that returns the final password and all my code should live inside this function

// TODO: Create a prompt to ask for the length of the password, must be between 8 and 128, save to variable

// TODO: create confirms to ask to include LOWERCASE in the password
// TODO: create confirms to ask to include UPPERCASE in the password
// TODO: create confirms to ask to include NUMBERS in the password
// TODO: create confirms to ask to include SPECIAL CHARACTERS in the password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
