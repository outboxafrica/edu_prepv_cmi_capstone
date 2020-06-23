//initiate checkout
function initiateCheckout() {
    alert("Initiate Checkout");
    // javascript for the function of the checkout seciton
    var idNum = document.getElementById("number").value;
    console.log("id " + idNum);

    var names = document.getElementById('names').value;
    console.log("names " + names);

    const errorElement = document.getElementById('error');
    console.log("error " + idNum);

    alert("collected user data");
    console.log("initiated the checkout");

    userEmail.innerText = "USER: " + getUserEmail();
    let init = getInitiatedCountdown();


}

// display get's user email

function getUserEmail() {


    // get users email from where it is stored in signup JS
    let email = "tony@gmail.com";
    console.log(email);

    return email;
}

function getInitiatedCountdown() {

    // initiate a timer & 
    var date = new date.getDate();
    console.log("The date is " + date);

    // link the timer to the user
    checkoutData[0].timer = date;

    return date;

}


//this will store rental information about current usr taking a movie

checkoutData = [{ id: 0, timer: 3, idNum: "", names: "" }]

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