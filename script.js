//Assignment Code
var generateBtn = document.querySelector("#generate");
  
function generatePassword() {
// Here’s my arrays: 
var characterArray = ["#", "@", "$", "%", "^", "*", "$", "(", ")", "-", "_", "=", "+"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 
var resultArray = [];
var userArray = [];
uppercaseArray [1]

// I used prompt to get an exact character number and confirm for yes-and-no answers.
  var numbCharacter = prompt ("How many characters do you want your password to have? You can choose between 8 and 140?");
  var numb = confirm ("Want to throw some numbers in your password?");
  var uppercase = confirm ("Why not add some uppercase letters to your password while you're at it?");
  var lowercase = confirm ("You can use lowercases letters, too. Want to sprinkle some in?");
  var character = confirm ("Do you want to top off your password with some special characters?");

// I’m setting some conditions here so that the code functions. I had trouble getting this to work at first so I relied on this source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat 
if (character){
  resultArray = resultArray.concat(characterArray);
}
if (numb){
  resultArray = resultArray.concat(numbArray); 
}
if (uppercase){
  resultArray = resultArray.concat(uppercaseArray);
}
if (lowercase){
  resultArray = resultArray.concat(lowercaseArray);
}
console.log(resultArray)
//I pulled this equation from 03-JavaScript, 01-Activities, 13-Ins_Iteration within the script.js
for (var i = 0; i < numbCharacter; i++) {
  //For this section, I turned to this source: https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array     
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("");
}
// The rest of this code was pretty straightforward because all of it was provided for us in the prompt. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
