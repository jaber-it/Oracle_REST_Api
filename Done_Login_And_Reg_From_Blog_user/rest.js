< !--Login Ans Sinup JS Script-- >    
const fullbodydiv = document.querySelector(&#39;.fullbody &#39;);
const fullbodydiv2 = document.querySelector(&#39;.fullbody2 &#39;);
const jwt = sessionStorage.getItem(&#39; jwt &#39;);

if (jwt === null) {
    fullbodydiv2.style.display = &#39; block &#39;;
    fullbodydiv.style.display = &#39; none &#39;;
} else {
    fullbodydiv.style.display = &#39; block &#39;;
    fullbodydiv2.style.display = &#39; none &#39;;
}


loadUser(jwt);
showhide();




function showhide() {
    const user_type = sessionStorage.getItem(& quot; user_type & quot;);
    if (user_type === & quot; 4 & quot; || user_type === & quot; 1 & quot;) {
        document.querySelector(& quot;.loginuser & quot;).classList.add(& quot; show & quot;);
    } else {
        document.querySelector(& quot;.loginuser & quot;).classList.add(& quot; hide & quot;);
    }
}

function logout() {
    localStorage.clear();
    sessionStorage.clear();
    sessionStorage.removeItem(& quot; jwt & quot;);
    window.history.back()
    // window.location.href = &#39;./login.html&#39;
}
function loginpage() {
    window.location.href = &#39; https://www.jaberit.com/p/login.html&#39;
      }


const card = document.querySelector(&#39;.card &#39;);
const imgWrapper = document.querySelector(&#39;.img - wrapper &#39;);

function resizeCard() {
    const width = card.offsetWidth;
    //imgWrapper.style.paddingTop = width + &#39;px&#39;;
}

window.addEventListener(&#39; resize &#39;, resizeCard);
resizeCard();
  </script >

<script>


function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/login");
  xhttp.setRequestHeader("Content-Type", "application/json");

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
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: 'Username and password do not match'
            });
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error with your request. Please try again later.'
        });
      }
    }
  };

  const data = {
    "username": username,
    "password": password,
  };

  xhttp.send(JSON.stringify(data));
  return false;
}

</script>
<script>
     function loadUser(jwt) {
            const xhttp = new XMLHttpRequest();
            xhttp.open(&quot;GET&quot;, &quot;https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/UserInfo/&quot; + jwt);
            xhttp.setRequestHeader(&quot;Content-Type&quot;, &quot;application/json;charset=UTF-8&quot;);
            xhttp.setRequestHeader(&quot;Authorization&quot;, jwt);
            xhttp.send();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    const response = JSON.parse(this.responseText);
                    console.log(response);
                    if (response.items.length &gt; 0) {
                        const user = response.items[0];
  
                        document.getElementById(&quot;avatar&quot;).src = user.pp_url;
                        document.getElementById(&quot;full_name&quot;).innerHTML = user.full_name;
                        document.getElementById(&quot;phone_number&quot;).innerHTML = user.phone_number;
                        document.getElementById(&quot;email_address&quot;).innerHTML = user.email_address;
                        document.getElementById(&quot;user_type&quot;).innerHTML = user.user_type;
                        console.log(user.user_type);
                    }
                }
            };
     }
          
    
</script>

