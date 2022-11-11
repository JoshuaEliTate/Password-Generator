// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"]

// Write password to the #password input
function writePassword(characters) {

  
  var prompt5 = window.prompt("between 8 and 128 How long would you like your password")
  if (prompt5 >= 8 && prompt5 <= 128) {
  console.log(prompt5)
  }

  var prompt1 = window.confirm("would you like lower case characters");
  var prompt2 = window.confirm("would you like upper case characters")
  var prompt3 = window.confirm("would you like to include numbers")
  var prompt4 = window.confirm("would you like to include special characters")


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var complete = ""

  if (prompt5 >= 8 && prompt5 <= 128) {
  for (let i = 0; i < prompt5; i++) {

    var rand1 = Math.floor(Math.random() * lower.length);
    var lower1 = lower[rand1];

    var rand2 = Math.floor(Math.random() * upper.length);
    var upper1 = upper[rand2];

    var rand3 = Math.floor(Math.random() * number.length);
    var number1 = number[rand3];

    var rand4 = Math.floor(Math.random() * special.length);
    var special1 = special[rand4];


  if (prompt1) {
    password = [lower1];
  }

  if (prompt2 && prompt1) {
    password = [lower1, upper1];
  } else if (!prompt1 && prompt2) {
    password = [upper1];
  }

  if (prompt3 && prompt2 && prompt1) {
    password = [lower1, upper1, number1];
  } else if (!prompt1 && prompt2 && prompt3) {
    password = [upper1, number1];
  } else if (!prompt1 && !prompt2 && prompt3) {
    password = [number1];
  } else if (prompt1 && !prompt2 && prompt3) {
    password = [lower1, number1];
  }

  if (prompt4 && prompt3 && prompt2 && prompt1) {
    password = [lower1, upper1, number1, special1];
  } else if (!prompt1 && prompt2 && prompt3 && prompt4) {
    password = [upper1, number1, special1];
  } else if (!prompt1 && !prompt2 && prompt3 && prompt4) {
    password = [number1, special1];
  } else if (prompt1 && !prompt2 && prompt3 && prompt4) {
    password = [lower1, number1, special1];
  } else if (prompt1 && !prompt2 && !prompt3 && prompt4) {
    password = [lower1, special1];
  } else if (!prompt1 && !prompt2 && !prompt3 && prompt4) {
    password = [special1];
  } else if (!prompt1 && prompt2 && !prompt3 && prompt4) {
    password = [upper1, special1,];
  }

  var randPass = Math.floor(Math.random() * password.length);
  var pass1 = password[randPass];
  var realPass= password
  
  complete = complete + pass1

  }
}
console.log(complete)

  var passwordText = document.querySelector("#password");

  console.log(password);
  console.log(pass1);
  var finalPassword = document.getElementById("password");
  finalPassword.innerHTML = complete
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
