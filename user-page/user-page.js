// eslint-disable-next-line no-unused-vars
import { redirectIfLoggedIn, signupUser, signInUser } from '../fetch-utils.js';


const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

signInForm.addEventListener('submit', async (e) =>{e.preventDefault();
    await signInUser (signInEmail.value, signInPassword.value);
    console.log(signInEmail.value, signInPassword.value);
    redirectIfLoggedIn();
});