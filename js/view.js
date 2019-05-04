let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navbar = document.getElementById('navbar');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});