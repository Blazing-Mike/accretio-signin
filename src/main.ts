import './style.scss';

const submitBtn: any = document.querySelector('.submit');
const nameField: any =  document.querySelector('.name-field');
const emailField: any = document.querySelector('.email-field');
const passwordField: any = document.querySelector('.password-field');


submitBtn?.addEventListener('click', (e: { preventDefault: () => void; }) => {
e.preventDefault();

if(nameField.value === '') {
    alert('Please enter your name');
} 

if(emailField.value === '') {
    alert('Please enter your email');
}
});

passwordField.addEventListener('input', (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(passwordField.value.length < 6) {
      console.log('Password is too short');
      
    }
});