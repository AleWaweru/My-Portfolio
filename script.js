const mainMenu = document.querySelector('.menuLists');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('.menuLists li a');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});