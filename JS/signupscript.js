// Fundamental JS for validating sign up detials

const id = document.getElementById('email');
const names = document.getElementById('password');
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