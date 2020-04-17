// Assignment Code
var generateBtn = document.querySelector("#generate");


function createPw() {
  charCount = "";
  userPw = "";
  //created character array
  options = {
    "lower": "abcdefghijklmnopqrstuvwxyz",
    "upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "number": "0123456789",
    "specialChar": "!#$%&()*+-/<=>?@"
  }

  //password size prompt created
  pwLength = prompt("How many characters should the password be? (Password size must be between 8 and 128 characters. )");

  //while loop created to force correct number input 
  while ((pwLength < 8) || (pwLength > 128)) {
    pwLength = prompt("Password size must be between 8 and 128 characters. ");
  }

  //while loop incase charCount = false (no input selected) it will keep repeating the prompt's. 
  while (charCount.length === 0) {
    alert("Please select all the possible character types you would like.");
    lower = confirm("Include lowercase letters in password?");
    upper = confirm("Include uppercase letters in password?");
    specialChar = confirm("Include special characters in password?");
    number = confirm("Include numbers in password?");
    charType();
  }

  // function to combine all inputs (function assigned to link two blocks of code)
  function charType() {

    if (upper === true) {
      charCount += options.upper;
    }

    if (lower === true) {
      charCount += options.lower;
    }

    if (number === true) {
      charCount += options.number;
    }
    if (specialChar === true) {
      charCount += options.specialChar;
    }

  }

  //generate the password 
  function createPassword() {
    for (let i = 0; i < pwLength; i++) {
      userPw += charCount.charAt(
        Math.floor(Math.random() * charCount.length)
      );
    }
  }
  createPassword();

  //console log created below 
  console.log("Password length: " + pwLength);
  console.log("Include lower: " + lower);
  console.log("Include upper: " + upper);
  console.log("Include number:" + number);
  console.log("Include special: " + specialChar);
  console.log("Password made from: " + charCount);
  console.log("Password is: " + userPw);

}
// Write password to the #password input
function writePassword() {
  password = createPw();
  passwordText = document.querySelector("#password");

  passwordText.value = userPw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

