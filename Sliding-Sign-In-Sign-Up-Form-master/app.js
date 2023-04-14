const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const reg_from_btn = document.querySelector("#regfrombtn");

reg_from_btn.addEventListener("click", () => {
  insert_api_Data();
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// Get the image URL input element.............
const imageUrlInput = document.getElementById('avatar');
const imgdesply = document.getElementById("imageContainer");
function displayImage() {
  const imageUrl = imageUrlInput.value;
  imageContainer.innerHTML = `<img src="${imageUrl}" style="max-width: 114px; border-radius: 10px; height: 65px;">`;
}
imageUrlInput.addEventListener('input', displayImage);

// Insert User Data To Table.............. 
function insert_api_Data() {
  var fnameInput = document.getElementById("fnameInput");
  var phonenumber = document.getElementById("phonenumber");
  var emailaddress = document.getElementById("emailaddress");
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var avatarInput = document.getElementById("avatar");
  var genderInput = document.getElementById("gender");

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
          Toast.fire({
            icon: 'error',
            title: 'Username already exists',
            text: 'Please choose a different username'
          });
        } else if (emailExists) {
          Toast.fire({
            icon: 'error',
            title: 'Email already exists',
            text: 'Please enter a different email address'
          });
        } else if (phoneExists) {
          Toast.fire({
            icon: 'error',
            title: 'Phone number already exists',
            text: 'Please enter a different phone number'
          });
        } else {
          // If the username, email, and phone number do not already exist, send the data to the server
          var data = {
            FULL_NAME: fnameInput.value,
            PHONE_NUMBER: phonenumber.value,
            EMAIL_ADDRESS: emailaddress.value,
            USERNAME: usernameInput.value,
            PASSWORD: passwordInput.value,
            PP_URL: avatarInput.value,
            GENDER: genderInput.value
          };
          var xhr2 = new XMLHttpRequest();
          xhr2.open("POST", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/insert", true);
          xhr2.setRequestHeader('Content-Type', 'application/json');

          xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {
              if (xhr2.status === 200) {
                var response = xhr2.responseText;
                console.log(response);
                Toast.fire({
                  icon: 'success',
                  title: 'Registration Successful',
                }).then((result) => {
                  if (result.isConfirmed) {
                    container.classList.remove("sign-up-mode");
                  }
                });
              } else {
                Toast.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'There was an error with your request. Please try again.'
                });
              }
            }
          };
          xhr2.send(JSON.stringify(data));
        }
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error with your request. Please try again.'
        });
      }
    }
  };
  xhr.send();
};

//========================================
//login Funcation Script..............

var jwt = sessionStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html'
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/login?username=" + username + "&password=" + password);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) {
        try {
          const objects = JSON.parse(xhttp.responseText);
          if (objects[0].status === "ok") {
            sessionStorage.setItem("jwt", objects[0].user_id);
            sessionStorage.setItem("user_type", objects[0].user_type);

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            });
            Toast.fire({
              icon: 'success',
              title: 'Registration Successfully'
            }).then(() => {
              // Redirect to index.html after 3 seconds
              setTimeout(() => {
                window.location.href = './Home.html';
              }, 1000);
            });
          } else {
            window.alert('Username and password do not match');
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  xhttp.send("");
  return false;
}
