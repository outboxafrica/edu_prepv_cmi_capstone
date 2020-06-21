// Fundamental JS for validating sign up detials
//this constant generates new user ID's
let checkLogin = '';
let checkSignUp = '';
let checkedInfo = true;

//get user data
function getInfo() {
    var email = document.getElementById('email').value;

    var password = document.getElementById('password').value;

    checkedInfo = checkInfo(email, password);

    if (checkInfo == false) {
        //create an account
        createAccount(email, password);
        alert("Account created");

    } else {
        window.location.href = "../pages/signuppage.html";
        alert("Account not created");
    }


}

//check user data with existing userdatabase : testing email & password
function checkInfo(e, p) {
    var check = false;
    //loop through the number of accounts 
    for (var i = 0; i < accounts.length; i++) {
        //find a matching email to determine if the user exists
        if (e == accounts[i].email) {
            check = true;
            window.location.href = "../pages/signuppage.html";
            //verifying to console the user id
            console.log("This person is of user id " + accounts[i].id);
            alert("This user email is taken");
            return check;
        } else if (e !== accounts[i].email) {
            alert("This user is not taken (false) " + check);
            console.log("inputed user details are not in our datatbase")
            return check;
        }
    }
}

//create a user account 
function createAccount(e, p) {

    //open home page
    alert("Welcome to movie magic " + e);

    window.location.href = "../pages/homepage.html";

}




// USER ACCOUNTS STORED BELOW--->
// Declaring user objects: id email password

var accounts = [{
            id: 1,
            email: "tony@gmail.com",
            password: "tony123123"

        },
        {
            id: 2,
            email: "bato@gmail.com",
            password: "bato123123"
        }

    ]
    // USER ACCOUNTS ABOVE--->