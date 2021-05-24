const arrowUpRef = document.querySelector('.arrow-up');

window.addEventListener('scroll', _.throttle(listArrowBtn, 200));
arrowUpRef.addEventListener('click', scrollToHeader);

function scrollToHeader() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function listArrowBtn() {
  if (pageYOffset > 400) {
    arrowUpRef.classList.add('is-active');
  } else {
    arrowUpRef.classList.remove('is-active');
  }
}
