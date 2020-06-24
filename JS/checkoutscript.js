//initiate checkout
function initiateCheckout() {
    alert("Initiate Checkout");
    // javascript for the function of the checkout seciton
    var idNum = document.getElementById("number").value;
    console.log("id " + idNum);

    var names = document.getElementById('names').value;
    console.log("names " + names);

    const errorElement = document.getElementById('error');
    console.log("error ");

    alert("collected user data");
    console.log("initiated the checkout");

    let init = getInitiatedCountdown();


}

// display get's user email

function getUserEmail() {


    // get users email from where it is stored in signup JS
    let email = "tony@gmail.com";
    userEmail.innerText = "USER: " + getUserEmail();
    console.log(email);

    alert("Collected email");

    return email;
}

function getInitiatedCountdown() {


}


// USER ACCOUNTS STORED BELOW--->
// Declaring user objects: id email password
// id    email    password     idNum      timer     idNames       
var accounts = [
    [2, "tony@gmail.com", "tony123", "CM10100007", 12, "ANTONY"],
    [3, "alvin@gmail.com"],
    [0, "", "", "", 0, ""],
    [2, "tony@gmail.com", "tony123", "CM10100007", 12, "ANTONY"],
];
// USER ACCOUNTS ABOVE--->