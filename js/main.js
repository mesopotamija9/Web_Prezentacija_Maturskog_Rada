let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navbar = document.getElementById('navbar');
let str = document.getElementsByClassName('str');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});


window.onload = function()
{
   window.onscroll = function()
   {
      if (document.documentElement.scrollTop >= 200 | document.body.scrollTop >= 200 ) {
          navbar.classList.add("nav-colored");
          navbar.classList.remove("nav-transparent");
      } 
      else {
          navbar.classList.add("nav-transparent");
          navbar.classList.remove("nav-colored");
      }
   }
}

for (i = 0; i < str.length; i++) {
  str[i].innerHTML = str[i].innerHTML.substr(0, 200) + "...";
  console.log(str[i].innerHTML.substr(0, 250) + "...");
}
