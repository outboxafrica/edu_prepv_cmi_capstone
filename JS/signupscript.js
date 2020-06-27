//checkbox


function formvalidation() {
    var uemail = document.getElementById("email");
    var passid = document.getElementById("password");
    var ufirst = document.getElementById("confirmPassword");
    var check = ch.value;

    //return values from checkvalidation
    alert("check is " + check);

    /**Invoking functions with arguments */
    if (checkValidation(check)) {
        if (emailvalidation(uemail)) {
            if (passid_validation(passid, 7, ufirst)) {
                alert('Welcome to Magi-Cinema ' + uemail.value);
                window.location.href = "movies.html";
                return true;
            }
        }
    }
    return false;
};

//Defining method emailvalidatation with parameter
function emailvalidation(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else if (uemail.value == null || uemail.value == '') {

        alert("Please enter an email address!");
        uemail.focus();
        return false;
    } else {

        alert("You must enter a valid email address!");
        uemail.focus();
        return false;
    }
}


//Defining method passid_valiadtion with parameters
function passid_validation(passid, mx, ufirst) {
    //Accessing form element
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid.value == null) {
        alert("Please input a password");
        passid.focus();

        return false;
    } else if (passid_len < mx) {
        alert("Password characters should be at least 8 characters!");
        passid.focus();
        return false;
    } else if (passid.value != ufirst.value) {
        alert("Both passwords should match!");
        passid.focus();
        return false;
    }
    return true;
}

function checkValidation(box) {
    if (box == "true") {
        return true;
    } else {
        alert("Please check the box to continue");
        return false;
    }
}

//validate the checkbox with boolean logic
const ch = document.getElementById('checkbox');
ch.addEventListener('click', function() {
    console.log(ch.value);

    if (ch.value != "true") {
        ch.value = true;
    } else if (ch.value == "true") {
        ch.value = false;
    }
});

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}


//If validation is successful go to next page, ifnot stay on loginpage
const submit_buttonLink = document.getElementById('submitBtn_link')
submit_buttonLink.addEventListener('click', function() {
    if (formvalidation()) {
        return true
    } else {
        event.preventDefault()
    }
})

//adding button listener for checkbox