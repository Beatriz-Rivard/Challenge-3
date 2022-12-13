// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 1.Promp the user for the password criteria.
    //  a. Password length a< 128
    //  b. Lowercase, uppercase, numbers, special characters
    
 // Assignment code here
  // 3. Generate password based on criteria
var generation = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "~@#$%^&*()-_=+:;.,?/\|";

//this function was created to automatic split the arrays
function generatePassword() { 
  lowercase = lowercase.split("")
  uppercase = uppercase.split("")
  number = number.split("")
  special = special.split("")

  //console display 
  console.log(lowercase)
  console.log(uppercase)
  console.log(number)
  console.log(special)
  console.log("Button Click")

  // 2. Validate the input.
var sign = parseInt(prompt("Choose a password length between 8 and 128 characters."));
let resultLower = confirm("Clck OK to include lowercase letters in your password.");
let resultUpper = confirm("Click OK to include uppercase letters in your password.");
let resultNumber = confirm("Click OK to include numbers in your password.");
let resultSpecial = confirm("Click OK to include special charactes in your password.");

// testing purposes of console methods
console.log(sign);
console.log(resultLower);
console.log(resultUpper);
console.log(resultNumber);
console.log(resultSpecial);

function mathRandom(arr){
 var randomNumber = Math.floor(Math.random() * arr.length)
 var randomArray = arr[randomNumber];
 return randomArray;
} 
  
var finalPassword = [];
var temporaryArray = [];
var finalArray = [];

if(resultLower){
  temporaryArray = temporaryArray.concat(lowercase)
  finalArray.push(mathRandom(lowercase))
}
if(resultUpper){
  temporaryArray = temporaryArray.concat(uppercase)
  finalArray.push(mathRandom(uppercase))
}
if(resultNumber){
  temporaryArray = temporaryArray.concat(number)
  finalArray.push(mathRandom(number))
}
if(resultSpecial){
  temporaryArray = temporaryArray.concat(special)
  finalArray.push(mathRandom(special))
}
console.log(temporaryArray)
for(var i = 0; i < sign; i ++){ ////for loop for each random character
  var temporaryCharacter = mathRandom(temporaryArray);
  finalPassword.push(temporaryCharacter);
}
console.log(finalPassword);


    // 4. Display password to the page.
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


