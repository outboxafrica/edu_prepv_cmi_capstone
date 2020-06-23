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
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

})

//initiate checkout
function initiateCheckout() {

}

// display usrname & timer for users

function getUserEmail() {


    // get users email from where it is stored in signup JS
    var email = "tony@gmail.com";
    console.log(email);

    // initiate a timer & 
    var date = new date.getDate();

    // link the timer to the user
    checkoutData[0].timer = date;


}

checkoutData = [{ id: 0, timer: , idNum: "", names: "" }]