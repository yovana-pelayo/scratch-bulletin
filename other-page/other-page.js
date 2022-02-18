import { checkAuth, logout } from '../fetch-utils';
checkAuth();

// const createForm = document.getElementById('create-post');
// createForm.addEventListener('submit', async (e)=>{
//     e.preventDefault();
//     const data = new FormData(createForm);
//     const newPost = {
//         title: data.get('title'),
//         description: data.get('description'),
//         contact: data.get('contact')
//     };
//     const resp = await createPost(newPost);
//     // console.log(resp);
// });
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});