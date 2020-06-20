// Fundamental JS for validating sign up detials
//this constant generates new user ID's
const identityNum = [];
let checkLogin = '';
let checkSignUp = '';

//get user data
function getInfo() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // var form = document.getElementById('form').value;
    var checkedInfo = checkInfo(email, password);

    alert("Create an account " + checkedInfo);
    //create an account
    createAccount(email, password, checkedInfo);
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
        } else {
            alert("This user is not taken");
            return check;
        }
    }
}

//create a user account 
function createAccount(e, p, check) {
    //check tells us that the account was not found in the database 
    if (check === false) {
        window.location.href = "../pages/homepage.html";

        alert("Welcome to movie majic " + e);

        console.log("User account is being created");
        //unique identity administrator
        var idAdmin = accounts[accounts.length - 1].id;
        //setting the new user's unique ID with identityNum
        accounts[accounts.length].id = idAdmin++;
        //new user's email
        accounts[accounts.length].email = e;
        //new user's password
        accounts[accounts.length].password = p;

        console.log("User account has been created - user may proceed to main page");
        //open home page


    } else {
        alert("Your account was not created ");
        window.location.href = "../pages/signuppage.html";

        console.log("This user already exists: Account Creation Terminated")
    }


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