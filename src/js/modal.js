const backdropRef = document.querySelector('.backdrop');
const modalBtnRef = document.querySelectorAll('.button');
const closeModalBtnRef = document.querySelector('.modal-close-button');
const bodyRef = document.querySelector('body');
const phoneInputRef = document.querySelector('.modal-form-input.phone');
const modalFormRef = document.querySelector('.modal-form');
const submitButtonRef = document.querySelector('.submit-form');
const inputNameRef = document.querySelector('.modal-form-input.name');
const inputPhoneRef = document.querySelector('.modal-form-input.phone');
const pnotifySuccessRef = document.querySelector('.pnotify-success');
const pnotifyErrorRef = document.querySelector('.pnotify-error');

modalBtnRef.forEach(button => button.addEventListener('click', onOpenModal));
closeModalBtnRef.addEventListener('click', onCloseModal);
modalFormRef.addEventListener('submit', onFormSubmit);
inputPhoneRef.addEventListener('input', setActiveButton);
inputNameRef.addEventListener('input', setActiveButton);
pnotifySuccessRef.addEventListener('click', immRemovePnotify);
pnotifyErrorRef.addEventListener('click', immRemovePnotify);
backdropRef.addEventListener('click', onBackdropClick);

function onOpenModal() {
  backdropRef.classList.remove('is-hidden');
  bodyRef.classList.add('modal-is-open');

  window.addEventListener('keydown', onPressEsc);
}

function onCloseModal() {
  backdropRef.classList.add('is-hidden');
  bodyRef.classList.remove('modal-is-open');

  window.removeEventListener('keydown', onPressEsc);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onPressEsc(e) {
  if (e.keyCode === 27) {
    onCloseModal();

    window.removeEventListener('keydown', onPressEsc);
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const serviceID = 'service_1w9d83d';
  const templateID = 'template_dsm9iw1';
  const userId = 'user_MGJ9uHI1mmGQlfAvlvFaa';
  const options = {
    message_name: e.target[0].value,
    message_phone: e.target[1].value,
  };

  if (e.target[0].validity.valid && e.target[1].validity.valid) {
    window.emailjs
      .send(serviceID, templateID, options, userId)
      .then(
        function () {
          pnotifySuccessRef.classList.add('is-open');
        },
        function (error) {
          pnotifyErrorRef.classList.add('is-open');
        },
      )
      .finally(() => {
        setTimeout(() => removePnotify(), 3000);
      });
    e.target[0].value = '';
    e.target[1].value = '';
    onCloseModal();
    submitButtonRef.classList.remove('is-active');
  }
}

function removePnotify() {
  pnotifySuccessRef.classList.remove('is-open');
  pnotifyErrorRef.classList.remove('is-open');
}

function setActiveButton() {
  if (inputPhoneRef.validity.valid && inputNameRef.validity.valid) {
    submitButtonRef.classList.add('is-active');
  } else {
    submitButtonRef.classList.remove('is-active');
  }
}

function immRemovePnotify() {
  pnotifySuccessRef.classList.remove('is-open');
  pnotifyErrorRef.classList.remove('is-open');
}
