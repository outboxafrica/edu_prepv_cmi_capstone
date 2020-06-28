function formvalidation() {
    var uemail = document.loginform.username;
    var passid = document.loginform.password;
    /**Invoking functions with arguments */
    if (emailvalidation(uemail)) {
        if (passid_validation(passid, 7)) {
            alert('Welcome back to Magi-Cinema: ' + uemail.value + '!');
            window.location.href = "../pages/movies.html";
            return true;

        }
    }
    return false;
};

//creating a button listener
const btn = document.getElementById("login_link");
btn.addEventListener('click', function() {
    formvalidation();
});


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

        alert("Please enter a valid email address!");
        uemail.focus();
        return false;
    }
}


//Defining method passid_valiadtion with parameters
function passid_validation(passid, mx) {
    //Accessing form element

    var passid_len = passid.value.length;
    if (passid_len == 0 || passid.value == null || passid.value == '') {
        alert("Please input a password");
        passid.focus();

        return false;
    } else if (passid_len < mx) {
        alert("Password should be at least 8 characters long");
        passid.focus();

        return false;
    } else {
        return true;

    }
}

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}