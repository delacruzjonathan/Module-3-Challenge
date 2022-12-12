
var generateBtn = document.querySelector("#generate");

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";
var fullArray = [];

function generatePassword () {
  
  var inputValid = true
  var length = prompt ('Please enter the number of characters (8-128):')
  if (length < 8 || length > 128) {
  //invalid input
  alert('Invalid length of '  +  length + '. Please select between 8 and 128') 
    return;
}
  var inputValid = true
if (confirm('Use lowercase characters?'));
fullArray = fullArray.concat(lowerChar);
//prompt for uppercase
if (confirm ('Use uppercase characters?'));
fullArray = fullArray.concat(upperChar);
//prompt for numeric
if (confirm( 'Use numeric values?'));
fullArray = fullArray.concat(numericalChar);
//prompt for special characters
if (confirm( 'Use special characters?'));
fullArray = fullArray.concat(specialChar);

//make sure it returns random password
if (inputValid) {
  return password;
} else {
  return;
}

function generatePassword () {
var password = "";
  for (var i = 0; i <= length; i++) {
    var randomPassword = Math.floor(Math.random() * fullArray.length);
    password = password + fullArray[randomPassword];
   }
   return password;
  }
}
// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






