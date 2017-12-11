window.onload = function () {
  var button = document.getElementById('btn');
  button.addEventListener('click',menuBurger);
}


function menuBurger() {
  var nav = document.querySelector('ul');
  if(nav.classList.contains("menu-hidden")){
    nav.classList.remove('menu-hidden');
    nav.classList.add('menu-visible');
  } else {
   nav.classList.remove('menu-visible');
   nav.classList.add('menu-hidden');
  }
}