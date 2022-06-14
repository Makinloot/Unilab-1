// burger menu
let openMenu = false;
window.onclick = (e) => {
  const burger = document.getElementById("burger");
  const burgerContent = document.getElementById("burger-content");
  // open menu if menu is closed & close menu if opened
  if (!openMenu && e.target == burger) {
    burgerContent.classList.add("active");
    openMenu = true;
    console.log("opened");
  } else if (openMenu && e.target !== burgerContent) {
    burgerContent.classList.remove("active");
    openMenu = false;
    console.log("closed");
  }
};
