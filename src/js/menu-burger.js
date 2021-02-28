if (screen.width <= 767) {
  const hamburgerBtnRef = document.querySelector('.hamburger');
  const headerNavigationRef = document.querySelector('.header-navigation');
  const heroRef = document.querySelector('.hero');

  hamburgerBtnRef.addEventListener('click', onToggleBurger);
  headerNavigationRef.addEventListener('click', onClickNav);
  heroRef.addEventListener('click', onHeroClick);

  function onToggleBurger(e) {
    hamburgerBtnRef.classList.toggle('is-active');

    if (hamburgerBtnRef.classList.contains('is-active')) {
      headerNavigationRef.classList.add('is-open');
    } else {
      headerNavigationRef.classList.remove('is-open');
    }
  }

  function onCloseMenu() {
    hamburgerBtnRef.classList.remove('is-active');
    headerNavigationRef.classList.remove('is-open');
  }

  function onClickNav(e) {
    if (e.target !== headerNavigationRef) {
      onCloseMenu();
    }
  }

  function onHeroClick(e) {
    if (e.currentTarget) {
      onCloseMenu();
    }
  }
}
