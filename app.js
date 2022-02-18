// import functions and grab DOM elements
import { createPost } from './fetch-utils.js';
// let state
const postForm = document.getElementById('post-page');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
postForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = new FormData(postForm);
    const newPost = {
        title: data.get('title'),
        message: data.get('message'),
        contact: data.get('contact')
    };
    const resp = await createPost(newPost);
    // eslint-disable-next-line no-console
    console.log(resp);
});