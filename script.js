document.addEventListener("DOMContentLoaded", function () {
  fetch('https://raw.githubusercontent.com/shey-dey/dear-jack/main/posts.json')
    .then(response => response.json())
    .then(data => {
      const posts = data.posts;
      const container = document.getElementById('pages');
      container.innerHTML = '';

      posts.forEach((post, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.innerHTML = `
          <h2>Dear Jack,</h2>
          <p>${post.entry}</p>
          <small>${post.date}</small>
        `;
        container.appendChild(page);
      });
    })
    .catch(error => {
      console.error("Failed to load posts.json", error);
    });
});
