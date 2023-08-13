const menu = document.querySelector('#moses-menu');
const menulinks = document.querySelector('.dec__menu'); 

menu.addEventListener('click', function() {
menu.classList.toggle('is-active');
menulinks.classList.toggle('active');
});
