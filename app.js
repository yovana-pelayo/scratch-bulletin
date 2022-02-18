// import functions and grab DOM elements
import { getPosts, redirectIfLoggedIn } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

// let state
const postPage = document.getElementById('post-page');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async () => {
    const posts = await getPosts();

    for (let post of posts) {
        const li = renderPosts(post);
        postPage.append(li);
    }
});

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', () => {
    location.replace('./user-page');
    redirectIfLoggedIn();
    
});
const createBtn = document.getElementById('create');
createBtn.addEventListener('click', () => {
    location.replace('./user-page');
    redirectIfLoggedIn();

});