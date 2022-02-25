/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { redirectIfLoggedIn, signupUser, signInUser } from '../fetch-utils.js';
 console.log('hi');

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

redirectIfLoggedIn();
signInForm.addEventListener('submit', async (e) =>{e.preventDefault();
    await signInUser (signInEmail.value, signInPassword.value);
    console.log(signInEmail.value, signInPassword.value);

    redirectIfLoggedIn();
});

signUpForm.addEventListener('submit', async (e) =>{e.preventDefault();
    await signupUser(signUpEmail.value, signUpPassword.value);
    console.log(signUpEmail.value, signUpPassword.value);
    redirectIfLoggedIn();
});
const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', () => {
    location.replace('/');
});