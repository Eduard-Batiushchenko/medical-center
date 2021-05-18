const hamburgerBtnRef = document.querySelector('.hamburger');
const headerNavigationRef = document.querySelector('.header-navigation');
const heroRef = document.querySelector('.hero');

hamburgerBtnRef.addEventListener('click', onToggleBurger);
headerNavigationRef.addEventListener('click', onClickNav);

function onToggleBurger() {
  hamburgerBtnRef.classList.toggle('is-active');

  if (hamburgerBtnRef.classList.contains('is-active')) {
    headerNavigationRef.classList.add('is-open');
    heroRef.addEventListener('click', onHeroClick);
  } else {
    headerNavigationRef.classList.remove('is-open');
    heroRef.removeEventListener('click', onHeroClick);
  }
}

function onCloseMenu() {
  hamburgerBtnRef.classList.remove('is-active');
  headerNavigationRef.classList.remove('is-open');
}

function onClickNav(e) {
  if (e.target !== headerNavigationRef) {
    onCloseMenu();
    heroRef.removeEventListener('click', onHeroClick);
  }
}

function onHeroClick() {
  onCloseMenu();
  heroRef.removeEventListener('click', onHeroClick);
}
