// Button details
const detailsBtn = document.querySelectorAll('.button-details');

detailsBtn.forEach(button => button.addEventListener('click', loadMoreInfo));

function loadMoreInfo({ currentTarget }) {
  const hiddenElementRef = document.querySelectorAll(
    `.${currentTarget.dataset.discr}`,
  );
  console.log(detailsBtn.children);

  const minusLogoRef = document.querySelectorAll('.minus-logo');
  const plusLogoRef = document.querySelectorAll(`
  .plus-logo`);
  hiddenElementRef.forEach(item => {
    item.classList.toggle('visually-hidden');
    if (!item.classList.contains('visually-hidden')) {
      currentTarget.classList.add('active');
    } else {
      currentTarget.classList.remove('active');
    }
  });

  // hideBtn(target);
}

// function hideBtn(button) {
//   button.classList.add('hidden');
//   button.removeEventListener('click', loadMoreInfo);
// }
