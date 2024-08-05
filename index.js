let passwordlength = 0
let includelowercase = false
let includeuppercase = false
let includenumbers = false
let includesymbols = false

function blabla(){

var checkboxlowercase = document.getElementById('lowercase');
var checkboxuppercase = document.getElementById('uppercase');
var checkboxsymbols = document.getElementById('symbols');
var checkboxnumbers = document.getElementById('numbers');

if (checkboxlowercase.checked) {
    includelowercase = true
}
else{
    includelowercase = false
}
if (checkboxuppercase.checked){
    includeuppercase = true
}
else{
    includeuppercase = false
}
if (checkboxnumbers.checked){
    includenumbers = true
}
else{
    includenumbers = false
}
if (checkboxsymbols.checked){
    includesymbols = true
}
else{
    includesymbols = false
}
passwordlength = document.getElementById("textbox").value

const password = generatepassword(passwordlength, includelowercase, 
        includelowercase, 
        includenumbers, 
        includesymbols);

console.log(password)

document.getElementById("password_box").value = password
}

document.getElementById('imgcopybutton').addEventListener('click', function() {
    // Get the text field
    var textToCopy = document.getElementById('password_box');

    // Select the text field
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    document.execCommand('copy');

    document.getElementById("password_box").value = "copied !"
});




function generatepassword(length, includelowercase, includelowercase, includenumbers, includesymbols){

    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbersChar = "0123456789"
    const symbolsChar = "!@#$%^&*()_+{}[]:;<>,.?/~"

    let allowedChar = ""
    let password = ""

    allowedChar += includelowercase ? lowercaseChar : ""
    allowedChar += includeuppercase? uppercaseChar : ""
    allowedChar += includenumbers? numbersChar : ""
    allowedChar += includesymbols? symbolsChar : ""

    if (length <= 0) {
        return '(password length must be ateast 1)'
    }
    if(allowedChar.length === 0){
        return '(no character type selected)'
    }

    for (let i = 0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChar.length)
        password += allowedChar[randomIndex]
    }
    
    return password;
}


