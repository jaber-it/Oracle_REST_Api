// login.js



function Allclear() {
  localStorage.clear();
  sessionStorage.clear();
}
Allclear();

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
                window.location.href = './index.html';
              }, 1000);
            });
          } else {
            const Toast = Swal.mixin({
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
            Toast.fire({
              icon: 'error',
              title: 'There was an error with your request. Please try again.'
            });
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
