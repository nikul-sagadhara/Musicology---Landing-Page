
let menuActive = document.getElementById('active');
let activeMenu = document.getElementById('active2');

function myFunction(i) {
  i.classList.toggle("toggle");
  menuActive.classList.toggle("menu_active");
  activeMenu.classList.toggle("active_menu2")
}

