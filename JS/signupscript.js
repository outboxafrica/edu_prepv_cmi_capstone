function formvalidation() {
    var uemail = document.signupform.email;
    var passid = document.signupform.password;
    var ufirst = document.signupform.confirmpassword;

    /**Invoking functions with arguments */
    if (emailvalidation(uemail)) {
        if (passid_validation(passid, 2, 12)) {
            if (firstvalidation(ufirst, 2, 12)) {
                alert('Welcome to Magi-Cinema ' + uemail.value)

                return true;
                // alert("Form Submitted Succesfully");
                // window.location.reload(Get);
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
    } else {
        alert("You must enter a valid email address!");
        uemail.focus();
        return false;
    }
}


//Defining method passid_valiadtion with parameters
function passid_validation(passid, mx, my) {
    //Accessing form element
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password characters should be between " + mx + " to " + my);

        passid.focus();
        return false;
    } else if (passid.value !== ufirst.value) {
        alert("Password should match!");
        return false;
    }

    return true;
}


// //Defining method passid_valiadtion with parameters
// function firstvalidation(ufirst, mx, my) {
//     //Accessing form element
//     var ufirst_len = ufirst.value.length;
//     if (ufirst !== ufirst) {
//         alert(
//         ufirst.focus();
//         return false;
//     }

//     return true;
// }

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