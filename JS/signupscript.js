// Fundamental JS for validating sign up detials

const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

errorElement = ValidateEmail(email);

// To prevent page from submiting if there is incorrect values

form.addEventListener('btn', (e) => {
    let messages = [];
    if (email.value === ' ' || email.value == null) {
        messages.push('Name is required');
    }

    if (password.value.length <= 8) {
        messages.push('Password must be longer than 8 characters')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})


// EMAIL VALIDATION
// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         document.form1.text1.focus();
//         return true;
//     } else {
//         alert("You have entered an invalid email address!");
//         document.form1.text1.focus();
//         return false;
//     }
// }

z
// USER ACCOUNTS STORED BELOW--->
// Declaring user objects: email

email = {
    "emails": []
}

// password

password = {
    "passwords": []
}

// USER ACCOUNTS ABOVE--->

//CAPTURE USER DATA

function captureUserData(e, p, check) {
    if (check == true) {
        email.value.push(email);
        password.value.push(password);
        return true;
    }
    return false;
}