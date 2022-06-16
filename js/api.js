import "./main.js";

window.onload = fetchApi();
// fetch data from jasonplaceholder api
async function fetchApi() {
  // fetch user data
  const user_res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user_data = await user_res.json();
  // fetch post data
  const posts_res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts_data = await posts_res.json();
  // fetch photo data
  const photos_res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos_data = await photos_res.json();
  // call fetchUser function
  fetchUser(user_data, photos_data, posts_data);
}

// pulls data and inserts it in HTML
function fetchUser(user_data, photo_data, post_data) {
  const userWrapper = document.getElementById("our-users");
  for (let i = 0; i < 3; i++) {
    // users path
    const userData = {
      name: user_data[i].name,
      username: user_data[i].username,
      location: user_data[i].address.city,
      company: user_data[i].company.name,
    };
    // posts path
    const postData = {
      title: post_data[i].title,
      body: post_data[i].body,
    };
    // photos path
    const photoData = {
      title: photo_data[i].title,
      thumb_url: photo_data[i].thumbnailUrl,
      url: photo_data[i].url,
    };
    // creates API ARTICLE DIV and inserts inside API data
    const root = document.createElement("div");
    root.classList.add("api__article", "flex");
    root.innerHTML = `
      <img class='api__img' src=${photoData.thumb_url} title=${photoData.title} alt='user img'>
      <strong>${userData.name}</strong>
      <h2 class='api__text-title'>${postData.title}</h2>
      <p class='api__text'>${postData.body}</p>
      <p class='api__loc-text'>From: ${userData.location}</p>
      <img class='api__art-img-${i} api__hero-img' src=${photoData.url}>
    `;
    userWrapper.append(root);
  }
}
