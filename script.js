// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Options Object
const keyStrings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  special: "!#$%&'*+,-./:;<=>?@^_`|~"
};

// Generate Password Function
function generatePassword() {
  var passwordCharacters = "";

  var length = window.prompt("Enter a number from 8-128 for password length");

  var passwordLength = parseInt(length);
  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length, please try again.");
    //Temporary way to restart inputs if invalid password length selected
    return;
  } else {
    var lowerCase = window.confirm("Would you like to use lowercase characters?")
    if (lowerCase) {
      passwordCharacters += keyStrings.lowercase;
    };

    var upperCase = window.confirm("Would you like to use uppercase characters?")
    if (upperCase) {
      passwordCharacters += keyStrings.uppercase;
    };

    var number = window.confirm("Would you like to use numbers?")
    if (number) {
      passwordCharacters += keyStrings.number;
    };

    var special = window.confirm("Would you like to use special characters?")
    if (special) {
      passwordCharacters += keyStrings.special;
    };

    var password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }
    return password;
  }
}
console.log(generatePassword());