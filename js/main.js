// burger menu
let openMenu = false;
window.onclick = (e) => {
  const burger = document.getElementById("burger");
  const burgerContent = document.getElementById("burger-content");
  const closeBurger = document.getElementById('close-burger');
  // open menu if menu is closed & close menu if opened
  if (!openMenu && e.target == burger) {
    burgerContent.classList.add("active");
    openMenu = true;
  } else if (openMenu && e.target == closeBurger || e.target !== burgerContent) {
    burgerContent.classList.remove("active");
    openMenu = false;
  }
};



