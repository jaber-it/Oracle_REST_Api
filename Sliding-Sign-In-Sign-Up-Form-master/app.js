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

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var response = xhr.responseText;
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
  xhr.send(JSON.stringify(data));

};

