function insert_api_Data() {
  var fnameInput = document.getElementById("fnameInput");
  var phonenumber = document.getElementById("phonenumber");
  var emailaddress = document.getElementById("emailaddress");
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var avatarInput = document.getElementById("avatar");

  // Check if username, email, and phone number already exist
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/view", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var items = response.items;
        var usernameExists = false;
        var emailExists = false;
        var phoneExists = false;
        for (var i = 0; i < items.length; i++) {
          if (items[i].username === usernameInput.value) {
            usernameExists = true;
            break;
          }
          if (items[i].email_address === emailaddress.value) {
            emailExists = true;
            break;
          }
          if (items[i].phone_number === phonenumber.value) {
            phoneExists = true;
            break;
          }
        }
        if (usernameExists) {
          alert("Username already exists. Please choose a different username.");
        } else if (emailExists) {
          alert("Email already exists. Please enter a different email address.");
        } else if (phoneExists) {
          alert("Phone number already exists. Please enter a different phone number.");
        } else {
          // If the username, email, and phone number do not already exist, send the data to the server
          var data = {
            FULL_NAME: fnameInput.value,
            PHONE_NUMBER: phonenumber.value,
            EMAIL_ADDRESS: emailaddress.value,
            USERNAME: usernameInput.value,
            PASSWORD: passwordInput.value,
            PP_URL: avatarInput.value
          };
          var xhr2 = new XMLHttpRequest();
          xhr2.open("POST", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/insert", true);
          xhr2.setRequestHeader('Content-Type', 'application/json');

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

          xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {
              if (xhr2.status === 200) {
                var response = xhr2.responseText;
                console.log(response);
                Toast.fire({
                  icon: 'success',
                  title: 'Registration Successfully'
                });
                container.classList.remove("sign-up-mode");
              } else {
                Toast.fire({
                  icon: 'error',
                  title: 'There was an error with your request. Please try again.'
                });
              }
            }
          };
          xhr2.send(JSON.stringify(data));
        }
      } else {
        alert("There was an error with your request. Please try again.");
      }
    }
  };
  xhr.send();
};
