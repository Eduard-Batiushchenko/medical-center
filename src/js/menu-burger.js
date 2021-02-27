const hamburgerBtnRef = document.querySelector('.hamburger');
const headerNavigationRef = document.querySelector('.header-navigation');

hamburgerBtnRef.addEventListener('click', onToggleBurger);

function onToggleBurger() {
  hamburgerBtnRef.classList.toggle('is-active');

  if (hamburgerBtnRef.classList.contains('is-active')) {
    headerNavigationRef.classList.add('is-active');
  } else {
    headerNavigationRef.classList.remove('is-active');
  }
}
