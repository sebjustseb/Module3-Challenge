// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEEFGHIJKLMNOPQRSTUVWXYZ";
  const numerals = "0123456789";
  const specialChars = "~`!@#$%^&*()-_=+[]{}\|';:<>,./?";
  const passLength = prompt("Enter password length between 8 and 128");
  if (passLength < 8 || passLength > 128) {
    alert("invalid password length");
    return "";
  };
  var lowercaseConfirm = confirm("Include lowercase letters?");
  var uppercaseConfirm = confirm("Includer uppercase letters?");
  var numeralsConfirm = confirm("Include numerals?");
  var specialCharsConfirm = confirm("Include special characters?");
  var passString = '';
  for (i = 0; i < passLength; i++) {
    if (lowercaseConfirm === true && passString.length < passLength) {
      var indexlower = Math.floor(Math.random() * 26);
      passString = passString + lowercase[indexlower];
    };
    if (uppercaseConfirm === true && passString.length < passLength) {
      var indexupper = Math.floor(Math.random() * 26);
      passString = passString + uppercase[indexupper];
    };
    if (numeralsConfirm === true && passString.length < passLength) {
      var indexnumeral = Math.floor(Math.random() * 10);
      passString = passString + numerals[indexnumeral];
    };
    if (specialCharsConfirm === true && passString.length < passLength) {
      var indexSpecialChar = Math.floor(Math.random() * 30);
      passString = passString + specialChars[indexSpecialChar];
    };
  };
  return passString;
};
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
