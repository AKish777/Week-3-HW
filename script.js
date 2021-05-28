// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write Password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  let lower = "abcdefghijklmnopqrstuvwxyz"
  let lowerArr = lower.split("");
  
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let UpperArr = upper.split("");
  
  let num = "0123456789";
  let numArr = num.split("");
  
  let spec = "!@#$%^&*()_+?<>";
  let specArr = spec.split("");
  
  let allChars = [];

  let password = "";
 
  let passwordlength = prompt("Please choose a length of at least 8 characters and no more than 128 characters in order to generate your password.");


  if (passwordlength < 8 || passwordlength > 128) {
    alert("Please choose a length of at least 8 characters and no more than 128 characters in order to generate your password.")
    generatePassword()
  
} if (confirm("Press 'OK' to genarate password with lowercase letters, otherwise cancel.")) {
    allChars = allChars.concat(lowerArr);
  
} if (confirm("Press 'OK' to genarate password with uppercase letters, otherwise cancel.")) {
    allChars = allChars.concat(UpperArr);
  
} if (confirm("Press 'OK' to genarate password with numbers, otherwise cancel.")) {
    allChars = allChars.concat(numArr);
  
} if (confirm("Press 'OK' to genarate password with special characters, otherwise cancel.")) {
    allChars = allChars.concat(specArr);
  
} if (allChars.length === 0) {
    alert("Atleast a single 'OK' entry necessary in order to generate password.");
    generatePassword()
  
} 

for (let i = 0; i < passwordlength; ++i) {
    let random = Math.floor(Math.random() * Math.floor(allChars.length));
    password += allChars[random];
}

  return password;
}