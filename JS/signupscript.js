// Fundamental JS for validating sign up detials
//this constant generates new user ID's
let checkLogin = '';
let checkSignUp = '';
// let checkedInfo = true;


//brings user data from form
function getInfo() {
    var email = document.getElementById('email').value;
    console.log(email);

    var password = document.getElementById('password').value;
    console.log(password);

    alert("Received user data");

    var checkedInfo = checkInfo(email, password);

    alert("Confirmed, this user is in our database " + checkedInfo)

    if (checkedInfo == false) {
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
            alert("This user email is not taken ");
            console.log("This email is not in our datatbase")
            return check;
        }
    }
}

//create a user account 
function createAccount(e, p) {

    //add using destructuring 
    const { email: e, password: p } = account;

    accounts[accounts.length] = account;


    //open home page
    alert("Welcome to movie magic " + account.value.email);

    window.location.href = "../pages/homepage.html";

}


// USER ACCOUNTS STORED BELOW--->
// Declaring user objects: id email password

const account = { id: 1, email: "dummy@gmail.com", password: "dummy" };

var accounts = [{ id: 2, email: "tony@gmail.com", password: "tony123" },
    { id: 3, email: "alvin@gmail.com", password: "alvin123" },
    { id: 4, email: "kamoti@gmail.com", password: "kamoti123" }
];
// USER ACCOUNTS ABOVE--->