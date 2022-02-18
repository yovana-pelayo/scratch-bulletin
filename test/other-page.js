



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