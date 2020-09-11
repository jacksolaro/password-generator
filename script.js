// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// returns the final password 
function generatePassword() {

  // initialize the final password array
  var finalPwd = [];

  // Prompt the User for Password Length and store in variable
  var pwdLength = prompt("How many characters would you like in your password?");

  // Validate that Password Length is longer than 8 characters, but shorter than 128
  if (pwdLength < 8) {
    alert("Your password must be at least 8 characters.")
  } else if (pwdLength > 128) {
    alert("Your password must be shorter than 128 characters.")
  } else {
    
    // Prompt the User for input on including: LOWERCASE, UPPERCASE, NUMBERS, and SPECIAL char
    var includeLowerCase = confirm("Would you like to include LOWERCASE characters?");
    var includeUpperCase = confirm("Would you like to include UPPERCASE characters?");
    var includeNumbers = confirm("Would you like to include NUMBER characters?");
    var includeSpeacial = confirm("Would you like to include SPECIAL characters?");

    // Validate that user selected at least one type of character
    if (includeLowerCase || includeUpperCase || includeNumbers || includeSpeacial) {

      // create an empty array to fill with character options for the password
      var pwdCharOptions = [];

      // if user selected LOWERCASE, add LOWERCASE as options
      if (includeLowerCase) {
        pwdCharOptions.push.apply(pwdCharOptions, ("abcdefghijklmnopqrstuvwxyz").split(""));
      }

      // if user selected UPPERCASE, add UPPERCASE as options
      if (includeUpperCase) {
        pwdCharOptions.push.apply(pwdCharOptions, ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split(""));
      }

      // if user selected NUMBERS, add NUMBERS as options
      if (includeNumbers) {
        pwdCharOptions.push.apply(pwdCharOptions, ("1234567890").split(""));
      }

      // if user selected SPECIAL, add SPECIAL as options
      if (includeSpeacial) {
        pwdCharOptions.push.apply(pwdCharOptions, (" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~").split(""));
      }

      // Loop through the number of characters the user provided for password length and add a random character out of the options the user filtered for
      for (let index = 0; index < pwdLength; index++) {
        finalPwd.push(pwdCharOptions[Math.floor(Math.random() * pwdCharOptions.length)]);
        console.log(finalPwd);
      }

      // if the user does not select any filters, return an alert
    } else {
      alert("You must select at least one type of character. Please try again.")
    }
  }

  // return the final password
  return finalPwd.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
