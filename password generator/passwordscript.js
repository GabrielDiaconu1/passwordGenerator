// Gabriel Diaconu 2023 
//This JavaScript file generates a random password based on the user's selected character types and length, and allows the user to copy the generated password to their clipboard. It sets variables for the necessary HTML elements on the page, including checkboxes and buttons, and sets the initial password input field value to an empty string. The generatePassword() function gets the length and checked checkboxes from the user and generates a random password using the allowed characters. The copyPassword() function copies the password to the clipboard when the copy button is clicked.

let upperCheckbox = document.getElementById("upper");
let lowerCheckbox = document.getElementById("lower");
let symbolCheckbox = document.getElementById("symbol");
let numberCheckbox = document.getElementById("number");
let passwordInput = document.getElementById('target');
let generateButton = document.getElementById('btn');
let copyButton = document.getElementById('copyButton');

//This line adds an event listener to the "copyButton" element so that when it is clicked, the "copyPassword" function is called.
copyButton.addEventListener('click', copyPassword);

// Set the initial value of the password input field to an empty string
passwordInput.value = "";
//This line adds an event listener to the "generateButton" element so that when it is clicked, the "generatePassword" function is called.
generateButton.addEventListener('click', generatePassword);
/**

* Generates a random password based on user-selected length and character set checkboxes.
* @return void
*/
function generatePassword() {
    let length = document.getElementsByName("length")[0].value;
    let allowedChars = "";

    // Check if any checkboxes are checked
    if (!upperCheckbox.checked && !lowerCheckbox.checked && !numberCheckbox.checked && !symbolCheckbox.checked) {
        passwordInput.value = "Error: Please check at least one checkbox";
        return;
    }

    if (upperCheckbox.checked) {
        allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerCheckbox.checked) {
        allowedChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numberCheckbox.checked) {
        allowedChars += "0123456789";
    }
    if (symbolCheckbox.checked) {
        allowedChars += ".\/\<>=[]{}()*&^%$#@!~-+=|";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordInput.value = password;
}
/**

* Copies the password currently displayed in the passwordInput field to the user's clipboard.
* @return void
*/
function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}