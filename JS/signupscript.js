// Fundamental JS for validating sign up detials
//this constant generates new user ID's
var email = '';
var password = '';


//brings user data from form
function getInfo() {
    alert("Received user data");

    email = document.getElementById('email').value;
    console.log(email);

    password = document.getElementById('password').value;
    console.log(password);

    console.log("Accounts length " + accounts.length);
    alert("Checking records... ");
    var check = (checkInfo(email));


    if (check == true) {
        alert("This user email is taken");

        window.location.href = "../pages/signuppage.html";

    } else {
        alert("This user email is not taken ");

        createAccount(email, password);
    }

}

//check user data with existing userdatabase : testing email & password
function checkInfo(em) {
    var info = false;
    //loop through the number of accounts 
    for (var i = 0; i < 3; i++) {
        console.log(accounts[i][1]);
        //find a matching email to determine if the user exists
        if (em == accounts[i][1]) {

            //verifying to console the user id
            console.log("A person was found, of user email: " + accounts[i][1]);
            info = true;

        } else {
            console.log("This email is not in our database " + em)
        }
    }
    return info;
}


//create a user account 
function createAccount(mail, pass) {


    //creating accounts
    accounts[accounts.length] = [];
    accounts[accounts.length][0] = 5;
    accounts[accounts.length][1] = mail;
    accounts[accounts.length][2] = pass;

    for (var j; j < accounts[accounts.length]; j++) {
        console.log(accounts[accounts.length][j]);
    }

    //open home page
    window.location.href = "../pages/homepage.html";

    alert("Welcome to movie magic " + mail);


}


// USER ACCOUNTS STORED BELOW--->
// Declaring user objects: id email password

var accounts = [
    [2, "tony@gmail.com", "tony123", "CM10100007", 12, "ANTONY"],
    [3, "alvin@gmail.com"],
    [0, "", "", "", 0, ""],
    [2, "tonyrubombora@gmail.com", "tony123", "CM10100007", 12, "ANTONY"],
];
// USER ACCOUNTS ABOVE--->