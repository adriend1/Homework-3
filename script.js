var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "<", "=", ">", ",", "@", "?"];

number = [1,2,3,4,5,6,7,8,9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function (){
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    enter = parseInt(prompt("How many characters would you like in your password? Please make a choice between 8 and 128 characters."));
    while (!enter || (enter < 8 || enter > 128)){
        enter = parseInt(prompt("You must choose between 8 and 128"))
    }
    
        confirmNumber = confirm("Do you want your password to contain numbers?");
        confirmCharacter = confirm("Do you want your password to contain special characters?");
        confirmUppercase = confirm("Do you want your password to contain Uppercase letters?");
        confirmLowercase = confirm("Do you want your password to contain Lowercase letters?");
    
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Please choose some criteria");
    }

    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }

    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha);
    }
    
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }

    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }

    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmcharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    
    else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }

    else if (confirmCharacter) {
        choices = character;
    }

    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }

    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices); 
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function(){
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!")
}



