
// global variables
var specialCharSet = "!@#$%^&*()_<>?";
 var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
 var numeric = "0123456789";


//determine length of password


var passLength = (Number(prompt("How many characters long would you like your password to be. Please type in a number between 8 and 128.")));
if (passLength >=129 || passLength <=7) {
prompt("please enter a valid number between 8 and 128.");
} 
else {
confirm("You have chosen a password that is " + passLength + "  numbers long.");

console.log(passLength);
};

//determine if client wants uppercase or lowercase letters.

var upCase = prompt("Would you like your password to be entirely uppercase? Please type 'yes' or 'no'.");
if (upCase === 'yes') {
   confirm("Your password will have all upper-case letters.");
}
else {
 confirm("Your password will have all lower-case letters.");
};

if (upCase === "yes") {
  console.log("yes");
}
else {
  console.log("no");
}


//derermine if client wants special characters 

var specCharSet = prompt("Would you like to incorporate special characters in your password? Please write 'yes' or 'no'."); 
  if (specCharSet === 'yes') {
    confirm("You have chosen to include special characters in your password.");
  }
  else {
   confirm("You have chosen not to include any special characters in your password.");
  };

  if (specCharSet === "yes") {
    console.log("yes");
  }
  else {
    console.log("no");
  }

  //determine if client wants numbers

  var incldNum = prompt("Would you like to incorporate numbers into your password? Please write 'yes' or 'no'.");
  if(incldNum === "yes") {
     confirm("You have chosen to include numbers in your password.");
  }
  else {
     confirm("You have chosen not to include numbers in your password.");
  
  }
   

  if (incldNum === "yes") {
    console.log("yes");
  }
  else {
    console.log ("no");
  }

//now that information has been collected, I will begin to generate password. beginning by creating a variable string which contains the answer to each question asked. I have created a truth table which i used 
//to keep track of all possible outcomes. I will use a switch statement to now evaluate the answers inputted against the 8 possible outcomes. 
var pass = upCase + specCharSet + incldNum;
console.log(pass);

switch (pass) {
  case "yesyesyes":
    passWord="";
    var pwdChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>?`;
    length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor((Math.random() * pwdChars.length) + 1));
    }
  window.alert("Your password is " + passWord);
  
  break;

  case "yesyesno":
    passWord="";
    var pwdChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()<>?`;
    length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor(Math.random() * passLength));
    }
  window.alert("Your password is " + passWord);

  break;

  case "yesnoyes":
    passWord = "";
    var pwdChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890`;
    length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor(Math.random() * passLength));
    }
 window.alert("Your password is " + passWord);
  break;

  case "yesnono":
  passWord = "";
  var pwdChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor(Math.random() * passLength));
    }
window.alert("Your password is " + passWord);
  break;

  case "noyesyes":
  passWord = "";
  var pwdChars = `abcdefghijklmnopqrstuvwxyz`;
  length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor(Math.random() * passLength));
    }
  window.alert("Your password is " + passWord);
  break;

  case "noyesno":
  passWord = "";
  var pwdChars = `abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?`;
  length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor(Math.random() * passLength));
    }
  window.alert("Your password is " + passWord);
  break;

  case "nonoyes":
  passWord = "";
  var pwdChars = `abcdefghijklmnopqrstuvwxyz0123456789`;
  length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor(Math.random() * passLength));
    }
  window.alert("Your password is " + passWord);

  break;

  case "nonono":
    passWord = "";
    var pwdChars = `abcdefghijklmnopqrstuvwxyz`;
    length = passLength;
    for (var i = 0; i < passLength; i++) {
      passWord += pwdChars.charAt(Math.floor((Math.random() * pwdChars.length) + 1));
    }
  window.alert("Your password is" + passWord);
  break;
  }



 

//password will disply in dotted box upon button click as well as in an alert box in the window

 


// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  var password = passWord;
  var passwordText = document.querySelector("#password");

 passwordText.value = passWord;

  }

 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
