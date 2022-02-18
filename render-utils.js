export function renderPosts(post){
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.message;

    const h3 = document.createElement('h3');
    p.textContent = post.contact;
    div.classList.add('post-list');

    div.append(h2, p, h3);
    return div;
}
