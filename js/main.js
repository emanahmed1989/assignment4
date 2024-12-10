var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signupLink = document.getElementById("signup-link");
var loginLink = document.getElementById("login-link");
var signupMessage = document.getElementById("signup-message");
var loginMessage = document.getElementById("login-message");
var signupButton = document.getElementById("signup");
var loginButton = document.getElementById("login");
var validnameMessaege = document.getElementById("validnameMessaege");
var validemailMessaege = document.getElementById("validemailMessaege");
var validpasswordMessaege = document.getElementById("validpasswordMessaege");
var wrongInputsMessage = document.getElementById("wrong-inputs");
var emailisExistMessage = document.getElementById("emailisExist");
var sucssesMessage = document.getElementById("sucsses");
var emptyInputsMessage = document.getElementById("empty-inputs");
var welcome = document.getElementById("welcome");
var currentIndex;




var users = [];
if (localStorage.getItem("userdata") != null) {
    users = JSON.parse(localStorage.getItem("userdata"));
}

//FUNCTIONS

function addUser() {
    var userData = {
        userName: nameInput.value,
        userEmail: emailInput.value,
        userPassword: passwordInput.value
    }
    users.push(userData);
    localStorage.setItem("userdata", JSON.stringify(users));
}
function validateEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}
function validatePassword(password) {

    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    return passwordPattern.test(password);

}
function validateuserName(uname) {

    const usernamePattern = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;

    return usernamePattern.test(uname);

}
function isExist(email) {
    var x;
    users.forEach(Element => {
        if (Element.userEmail == email) {
            console.log(email);
           
            x= true;
            console.log(x); 
        }
        else {
           x= false;
        }
        console.log(x); 
        return x;
    });
}
function isValidUser(email,password) {
    users.forEach(Element => {
        if (Element.userEmail == email&&Element.userPassword==password) {
            currentIndex=users.indexOf(Element);
            return true;
            
        }
        else {
            return false;
        }
    });
}




//HANDLE EVENTS

signupLink.addEventListener("click", function () {
    loginMessage.classList.remove("d-none");
    signupMessage.classList.add("d-none");
    nameInput.classList.remove("d-none");
    signupButton.classList.remove("d-none");
    loginButton.classList.add("d-none");
});
loginLink.addEventListener("click", function () {
    loginMessage.classList.add("d-none");
    signupMessage.classList.remove("d-none");
    nameInput.classList.add("d-none");
    signupButton.classList.add("d-none");
    loginButton.classList.remove("d-none");
});
nameInput.addEventListener("input", function () {
    if (!validateuserName(nameInput.value)) {
        validnameMessaege.classList.remove("d-none");
    }
    else {
        validnameMessaege.classList.add("d-none");
    }
})
emailInput.addEventListener("input", function () {
    if (!validateEmail(emailInput.value)) {
        validemailMessaege.classList.remove("d-none");
    }
    else {
        validemailMessaege.classList.add("d-none");
    }
})
passwordInput.addEventListener("input", function () {
    if (!validatePassword(passwordInput.value)) {
        validpasswordMessaege.classList.remove("d-none");
    }
    else {
        validpasswordMessaege.classList.add("d-none");
    }
})


signupButton.addEventListener("click", function () {
    if (nameInput.value != "" && emailInput.value != "" && passwordInput.value != "") {
        emptyInputsMessage.classList.add("d-none");
        if (validateuserName(nameInput.value) && validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
            wrongInputsMessage.classList.add("d-none");
            var x=isExist(emailInput.value);
            console.log(x);
            
            if (isExist(emailInput.value)) {
                emailisExistMessage.classList.remove("d-none")
                console.log("EXIST")
            }
            else {
                addUser();
                
                sucssesMessage.classList.remove("d-none")

            }

        }
        else {
            wrongInputsMessage.classList.remove("d-none");
        }
    }
    else {
        emptyInputsMessage.classList.remove("d-none");
    }


});

loginButton.addEventListener("click",function(){
    if ( emailInput.value != "" && passwordInput.value != "") {
        emptyInputsMessage.classList.add("d-none");
        if (isValidUser(emailInput.value,passwordInput.value)) {
            wrongInputsMessage.classList.add("d-none");
            window.location.href = "home.html";
            welcome.innerHTML="Welcome"+users[currentIndex].userName;
      
        }
        else {
            wrongInputsMessage.classList.remove("d-none");
        }
    }
    else {
        emptyInputsMessage.classList.remove("d-none");
    }


});
