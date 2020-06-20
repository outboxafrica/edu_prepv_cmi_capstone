// javascript for the function of the checkout seciton
const id = document.getElementById('number');
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