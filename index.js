const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
let menuOpened = false;

function switchMenuOpened() {
  menuOpened = !menuOpened;
  if (menuOpened) {
    // Open menu
    sideMenu.classList.add('opened');
    overlay.classList.add('show');
  } else {
    // Close menu
    sideMenu.classList.remove('opened');
    overlay.classList.remove('show');
  }
}

document.getElementById('burger-menu').addEventListener('click', switchMenuOpened);
document.getElementById('overlay').addEventListener('click', switchMenuOpened);

Array.from(sideMenu.getElementsByTagName('a')).forEach(one => {
  one.addEventListener('click', switchMenuOpened);
});
