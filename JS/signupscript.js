// Fundamental JS for validating sign up detials

//get user data
function getInfo(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
 var checkedInfo = checkInfo(email);

alert("Captured User email " +email+" and User Password "+password+" could be "+checkedInfo);
}

//check user data with existing userdatabase
function checkInfo(e){
    let check = false;
    //loop through the number of accounts 
    for(var i=0; i<accounts.length; i++){
        //find a matching email to determine if the user exists
        if(e == accounts[i].email){
            check = true;
            return check;
        }
    }
}

// USER ACCOUNTS STORED BELOW--->
// Declaring user objects: email

var accounts = [
{   
    id: 1,
    email: "tonyrubombora@gmail.com",
password:"tony123123"
}, {
 id: 2,
 email:"bato@gmail.com",
 password:"bato123123"
}

]

// password

var password = {
    "passwords": []
}

// USER ACCOUNTS ABOVE--->