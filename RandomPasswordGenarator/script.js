// Define the function generateRandomPassword
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-={}[]:<>?,./`~";

  let allowedChar = "";
  let password = "";

  // Add characters to allowedChar based on selected criteria
  allowedChar += includeLowercase ? lowercase : "";
  allowedChar += includeUppercase ? uppercase : "";
  allowedChar += includeNumbers ? numbers : "";
  allowedChar += includeSymbols ? symbols : "";

  // Validate input parameters
  if (length <= 0) {
      return "Password length must be at least 1";
  }
  if (allowedChar.length === 0) {
      return "At least one category should be selected";
  }

  // Generate the password
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChar.length);
      password += allowedChar[randomIndex];
  }

  
  return password;
}


const display = document.getElementById("output");
const button = document.getElementById("button");

// Assign event handler to the button
button.onclick = function() {
  const passLength = parseInt(document.getElementById("input").value);
  const includeLowercase = document.getElementById("lc").checked;
  const includeUppercase = document.getElementById("uc").checked;
  const includeNumbers = document.getElementById("num").checked;
  const includeSymbols = document.getElementById("char").checked;

  
  const password = generateRandomPassword(passLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

  display.textContent = password;
  
};
