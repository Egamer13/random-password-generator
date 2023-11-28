// Function for generating a password with constant variables that have assigned strings for all upper/lowercase characters, numbers, and special characters.
function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_-+=<>?/';

  // Password variable
  let password = '';

// Grabs document ID elements from HTML. 
  let length = parseInt(document.getElementById('passwordLength').value);
  let includeLowercase = document.getElementById('includeLowercase').checked;
  let includeUppercase = document.getElementById('includeUppercase').checked;
  let includeNumeric = document.getElementById('includeNumeric').checked;
  let includeSpecial = document.getElementById('includeSpecial').checked;

//  If statement ensures that length is no less than 8 or greater than 128, will display alert if either length is true.
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return '';
  }

// Charset string allows various combinations of a password to be created, += appends the Chars to the charset.
  let charset = '';
  if (includeLowercase) charset += lowercaseChars;
  if (includeUppercase) charset += uppercaseChars;
  if (includeNumeric) charset += numericChars;
  if (includeSpecial) charset += specialChars;

// For loop for length of password, also selects characters from charset in line 34 and appends them for the password string. 
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// generate and password are linked to HTML elements, so that when the buttons are clicked they generate a random password.
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


generateBtn.addEventListener("click", function () {
  
  var password = generatePassword();
  passwordText.value = password;
});