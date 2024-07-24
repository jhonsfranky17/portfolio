const hamburgerMenu = document.getElementById("hamburger-menu");
const menuItems = document.getElementById("menu-items");
console.log(hamburgerMenu);
console.log(menuItems);
const body = document.body;
hamburgerMenu.addEventListener("click", () => {
  if (menuItems.classList.contains("hidden")) {
    menuItems.classList.remove("hidden");
    menuItems.classList.add("block", "fade-in");
    body.style.overflow = "";
  } else {
    body.style.overflow = "hidden";
    menuItems.classList.remove("block");
    menuItems.classList.add("hidden");
  }
});
