function insert_api_Data() {
  var fnameInput = document.getElementById("fnameInput");
  var phonenumber = document.getElementById("phonenumber");
  var emailaddress = document.getElementById("emailaddress");
  //var gender = document.getElementById("gender");
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var avatarInput = document.getElementById("avatar");
  var data = {
    FULL_NAME: fnameInput.value,
    PHONE_NUMBER: phonenumber.value,
    EMAIL_ADDRESS: emailaddress.value,
    //GENDER: gender.value,
    USERNAME: usernameInput.value,
    PASSWORD: passwordInput.value,
    PP_URL: avatarInput.value
  };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/insert", true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  // check if the username, phone number, and email address are already used before submitting the data to the server
  var usernameExists = false;
  var phoneNumberExists = false;
  var emailAddressExists = false;
  var xhrCheck = new XMLHttpRequest();
  xhrCheck.open("GET", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/check_user?username=" + encodeURIComponent(usernameInput.value) + "&phonenumber=" + encodeURIComponent(phonenumber.value) + "&emailaddress=" + encodeURIComponent(emailaddress.value), true);
  xhrCheck.onreadystatechange = function () {
    if (xhrCheck.readyState === 4) {
      if (xhrCheck.status === 200) {
        var response = JSON.parse(xhrCheck.responseText);
        if (response.items.length > 0) {
          for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            if (item.USERNAME === usernameInput.value) {
              usernameExists = true;
            }
            if (item.PHONE_NUMBER === phonenumber.value) {
              phoneNumberExists = true;
            }
            if (item.EMAIL_ADDRESS === emailaddress.value) {
              emailAddressExists = true;
            }
          }
          if (usernameExists || phoneNumberExists || emailAddressExists) {
            Toast.fire({
              icon: 'error',
              title: 'The entered data is already used. Please enter different data.'
            });
          }
        }
      } else {
        Toast.fire({
          icon: 'error',
          title: 'There was an error with your request. Please try again.'
        });
      }
    }
  };
  xhrCheck.send();

  // submit the data to the server only if the username, phone number, and email address are not already used
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 && !usernameExists && !phoneNumberExists && !emailAddressExists) {
        var response = xhr.responseText;
        console.log(response);
        Toast.fire({
          icon: 'success',
          title: 'Registration Successfully'
        });
        container.classList.remove("sign-up-mode");
      } else if (!usernameExists && !phoneNumberExists && !emailAddressExists) {
        Toast.fire({
         
