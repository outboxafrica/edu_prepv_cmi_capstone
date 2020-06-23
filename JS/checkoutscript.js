// javascript for the function of the checkout seciton
const idNum = document.getElementById('number');
const names = document.getElementById('names');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// To prevent page from submiting if there is incorrect values

form.addEventListener('btn', (e) => {
    let messages = [];
    if (names.value === '' || names.value == null) {
        messages.push('Name is required');
    } else {
        initiateCheckout();
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

})

//initiate checkout
function initiateCheckout(idNum, names) {
    console.log("initiated the checkout");
    let email = getUserEmail();
    let init = getInitiatedCountdown();

    userEmail.innerText = "USER: " + email;
    // window.location.href = "";

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