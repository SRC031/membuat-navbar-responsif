// document.addEventListener('DOMContentLoaded', function () {
//     var navbarToggle = document.getElementById('navbarToggle');
//     var navbarMenu = document.getElementById('navbarMenu');

//     navbarToggle.addEventListener('click', function () {
//         navbarMenu.classList.toggle('show');
//     });
// });
// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika  hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


