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

    alert("Checking records...");
    checkInfo(email);


}

//check user data with existing userdatabase : testing email & password
function checkInfo(em) {

    //loop through the number of accounts 
    for (var i = 0; i < accounts.length; i++) {
        //find a matching email to determine if the user exists
        if (em == accounts[i].email) {

            window.location.href = "../pages/loginpage.html";
            //verifying to console the user id
            console.log("This person is of user id " + accounts[i].id);
            alert("This user email is taken");
            return true;

        } else {
            console.log("This email is not in our datatbase")
            alert("This user email is not taken ");
            createAccount(email, password);

            return false;
        }
    }
}

//create a user account 
function createAccount(mail, pass) {

    //creating accounts
    accounts[5].id = 5;
    accounts[5].email = mail;
    accounts[5].password = pass;

    console.log(accounts[5]);

    //open home page
    alert("Welcome to movie magic " + mail);

    // window.location.href = "../pages/homepage.html";

}


// USER ACCOUNTS STORED BELOW--->
// Declaring user objects: id email password

var accounts = [
    { id: 2, email: "tony@gmail.com", password: "tony123" },
    { id: 3, email: "alvin@gmail.com", password: "alvin123" },
    { id: 4, email: "kamoti@gmail.com", password: "kamoti123" },
    { id: 5, email: "", password: "" },
    { id: 6, email: "", password: "" },
    { id: 7, email: "", password: "" }
];
// USER ACCOUNTS ABOVE--->