const form = document.querySelector('form');
const fullNameInput = document.querySelector('#full-name');
const phoneNumberInput = document.querySelector('#phone-number');
const emailAddressInput = document.querySelector('#email-address');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const ppUrlInput = document.querySelector('#pp-url');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Perform form validation
  if (fullNameInput.value.trim() === '') {
    fullNameInput.classList.add('error');
    fullNameInput.nextElementSibling.textContent = 'Full name is required';
  } else {
    fullNameInput.classList.remove('error');
    fullNameInput.nextElementSibling.textContent = '';
  }

  if (phoneNumberInput.value.trim() === '') {
    phoneNumberInput.classList.add('error');
    phoneNumberInput.nextElementSibling.textContent = 'Phone number is required';
  } else {
    phoneNumberInput.classList.remove('error');
    phoneNumberInput.nextElementSibling.textContent = '';
  }

  if (emailAddressInput.value.trim() === '') {
    emailAddressInput.classList.add('error');
    emailAddressInput.nextElementSibling.textContent = 'Email address is required';
  } else if (!isValidEmail(emailAddressInput.value.trim())) {
    emailAddressInput.classList.add('error');
    emailAddressInput.nextElementSibling.textContent = 'Invalid email address';
  } else {
    emailAddressInput.classList.remove('error');
    emailAddressInput.nextElementSibling.textContent = '';
  }

  if (usernameInput.value.trim() === '') {
    usernameInput.classList.add('error');
    usernameInput.nextElementSibling.textContent = 'Username is required';
  } else {
    usernameInput.classList.remove('error');
    usernameInput.nextElementSibling.textContent = '';
  }

  if (passwordInput.value.trim() === '') {
    passwordInput.classList.add('error');
    passwordInput.nextElementSibling.textContent = 'Password is required';
  } else {
    passwordInput.classList.remove('error');
    passwordInput.nextElementSibling.textContent = '';
  }

  if (ppUrlInput.value.trim() === '') {
    ppUrlInput.classList.add('error');
    ppUrlInput.nextElementSibling.textContent = 'Profile picture URL is required';
  } else if (!isValidUrl(ppUrlInput.value.trim())) {
    ppUrlInput.classList.add('error');
    ppUrlInput.nextElementSibling.textContent = 'Invalid URL';
  } else {
    ppUrlInput.classList.remove('error');
    ppUrlInput.nextElementSibling.textContent = '';
  }

  // Submit the form if there are no errors
  if (!form.querySelector('.error')) {
    form.submit();
  }
});

function isValidEmail(email) {
  // Check if the email is in a valid format using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUrl(url) {
  // Check if the URL is in a valid format using a regular expression
  const urlRegex = /^(https?:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}|([0-9]{1,3}\.){3}[0-9]{1,3})(:[0-9]{1,5})?(\/.*)?$/i;
  return urlRegex.test(url);
}
