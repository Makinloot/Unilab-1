// burger menu
let openMenu = false;
window.onclick = (e) => {
  const burger = document.getElementById("burger");
  const burgerContent = document.getElementById("burger-content");
  // open menu if menu is closed & close menu if opened
  if (!openMenu && e.target == burger) {
    burgerContent.classList.add("active");
    openMenu = true;
  } else if (openMenu && e.target !== burgerContent) {
    burgerContent.classList.remove("active");
    openMenu = false;
  }
};

fetchApi();
async function fetchApi() {
  const user_res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user_data = await user_res.json();
  console.log(user_data);
  const posts_res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts_data = await posts_res.json();
  console.log(posts_data);
  const photos_res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos_data = await photos_res.json();
  console.log(photos_data);

  fetchUser(user_data, photos_data, posts_data)
  // fetchImg(data);
}

function fetchUser(user_data, photo_data, post_data) {
  const userWrapper = document.getElementById('our-users');
  for(let i = 0; i < 3; i++){
    const userData = {
      name: user_data[i].name,
      username: user_data[i].username,
      location: user_data[i].address.city,
      company: user_data[i].company.name
    }

    const postData = {
      title: post_data[i].title,
      body: post_data[i].body
    }

    const photoData = {
      title: photo_data[i].title,
      thumb_url: photo_data[i].thumbnailUrl,
      url: photo_data[i].url
    }

    const root = document.createElement('div');
    root.classList.add('api__article', 'flex');
    root.innerHTML = `
      <img class='api__img' src=${photoData.thumb_url} title=${photoData.title} alt='user img'>
      <strong>${userData.name}</strong>
      <h2 class='api__text-title'>${postData.title}</h2>
      <p class='api__text'>${postData.body}</p>
      <p class='api__loc-text'>From: ${userData.location}</p>
    `
    const img = document.createElement('img');
    img.setAttribute('src', photoData.url);
    img.classList.add(`api__art-img-${i}`)
    userWrapper.append(root, img);

  }
}


