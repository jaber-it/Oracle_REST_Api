
const jwt = sessionStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}

function loadUser(jwt) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/UserInfo/" + jwt);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Authorization", jwt);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      if (response.items.length > 0) {
        const user = response.items[0];
        document.getElementById("fname").innerHTML = user.full_name;
        document.getElementById("avatar").src = user.pp_url;
        document.getElementById("username").innerHTML = user.username;
        document.getElementById("full_name").innerHTML = user.full_name;
        document.getElementById("phone_number").innerHTML = user.phone_number;
        document.getElementById("email_address").innerHTML = user.email_address;
        document.getElementById("pp_url").innerHTML = user.pp_url;
        document.getElementById("user_type").innerHTML = user.user_type;
        console.log(user.user_type);
      }
    }
  };
}

loadUser(jwt);
showhide();


function showhide() {
  const user_type = sessionStorage.getItem("user_type");
  if (user_type === "4" || user_type === "1") {
    document.querySelector(".loginuser").classList.add("show");
  } else {
    document.querySelector(".loginuser").classList.add("hide");
  }
}

function logout() {
  localStorage.clear();
  sessionStorage.clear();
  sessionStorage.removeItem("jwt");
  window.location.href = './login.html'
}


const card = document.querySelector('.card');
const imgWrapper = document.querySelector('.img-wrapper');

function resizeCard() {
  const width = card.offsetWidth;
  //imgWrapper.style.paddingTop = width + 'px';
}

window.addEventListener('resize', resizeCard);
resizeCard();
