const email = document.querySelector("input[type ='email']");
const form = document.querySelector('form');
let msg = document.querySelector('.valid');
const card = document.querySelector('.card');
const successCard = document.querySelector('.card-success-state');
const successButton = document.querySelector('.success-button');
const successEmail = document.querySelector('.email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (email.value.length !== 0 && (emailPattern.test(email.value))) {
        msg.textContent = '';
        card.classList.add('visible');
        successCard.classList.remove('visible');
        successEmail.textContent = email.value;
    } else {
        msg.textContent = 'Valid email required!'
        email.style.color = 'red';
        email.style.borderColor = 'red';
        email.style.backgroundColor = 'pink';
    }
})

email.addEventListener('input', function () {
    email.style.backgroundColor = 'white';
    email.style.color = 'var(--charcoal-grey)';
    email.style.borderColor = 'var(--grey)';
    msg.textContent = '';
})

successButton.addEventListener('click', function () {
    card.classList.remove('visible');
    successCard.classList.add('visible');
    email.value = '';
})



