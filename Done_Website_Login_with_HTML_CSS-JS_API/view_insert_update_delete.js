
function loadTable() {
    showLoading();
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/view");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);

            var trHTML = '<tr><th>ID</th><th>Avatar</th><th>Full Name</th><th>Phone Number</th><th>Email Address</th><th>Gender</th><th>UserName</th><th>Actions</th></tr>';
            try {
                const objects = JSON.parse(this.responseText);
                const items = objects.items; // access the "items" property
                const tableBody = document.getElementById("users-table-body");
                const table = document.getElementById("mytable");
                if (table) {
                    for (let item of items) { // iterate through the "items" array
                        trHTML += '<tr>';
                        trHTML += '<td>' + item.user_id + '</td>';
                        trHTML += '<td><img src="' + item.pp_url + '" width="50px"></td>';
                        trHTML += '<td>' + item.full_name + '</td>';
                        trHTML += '<td>' + item.phone_number + '</td>';
                        trHTML += '<td>' + item.email_address + '</td>';
                        trHTML += '<td>' + item.gender + '</td>';
                        trHTML += '<td>' + item.username + '</td>';
                        trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + item.user_id + ')">Edit</button>';
                        trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + item.user_id + ')">Del</button></td>';
                        trHTML += "</tr>";
                    }
                    table.innerHTML = trHTML;
                    hideLoading();
                } else {
                    console.log("Table with id 'mytable' not found in HTML.");
                }
            } catch (error) {
                console.log("Error parsing JSON: " + error);
            }
        } else if (this.readyState == 4 && this.status != 200) {
            console.log("Error: API request failed with status code " + this.status);
        }
    };
}


function showLoading() {
    document.getElementById("loading-overlay").style.display = "block";
    setTimeout(function () {
        refreshIcon.style.display = "none";
    }, 10000);
}

function hideLoading() {
    document.getElementById("loading-overlay").style.display = "none";
}



var modal = document.getElementById('myModal');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function insert_api_Data() {
    var inputElements = document.querySelectorAll("input");
    var fnameInput = document.getElementById("fnameInput");
    var phonenumber = document.getElementById("phonenumber");
    var emailaddress = document.getElementById("emailaddress");
    var gender = document.getElementById("gender");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var avatarInput = document.getElementById("avatar");
    var data = { FULL_NAME: fnameInput.value, PHONE_NUMBER: phonenumber.value, EMAIL_ADDRESS: emailaddress.value, GENDER: gender.value, USERNAME: usernameInput.value,  PASSWORD: passwordInput.value, PP_URL: avatarInput.value };
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
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'There was an error with your request. Please try again.'
                });
            }
        }
    };
    xhr.send(JSON.stringify(data));
    inputElements.forEach(function (input) {
        input.value = "";
        var modal = document.getElementById('regmyModal');
        modal.style.display = "none";
        loadTable();
        refreshTable();
    });
};



function userDelete(id) {
    // Create new XMLHttpRequest object
    let xhttp = new XMLHttpRequest();
    // Prepare the DELETE request to the API endpoint
    xhttp.open("DELETE", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/User/DeleteDetels/" + id);
    // Send the DELETE request
    xhttp.send();
    // Handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Refresh the report
            loadTable();
        }
    };
}
// Get the table element
let table = document.getElementById("myTable");

// Add a "Delete" button to each row
for (let i = 1; i < table.rows.length; i++) {
    // Create "Delete" button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    // Add event listener to "Delete" button
    deleteButton.addEventListener("click", function () {
        // Get the user ID from the first cell of the row
        let id = table.rows[i].cells[0].innerHTML;

        // Call the deleteUser function and pass the user ID as the argument
        userDelete(id);
    });

    // Add "Delete" button to the last cell of the row
    table.rows[i].cells[table.rows[i].cells.length - 1].appendChild(deleteButton);
};

// Get the user details from the input elements
function updateUser() {

    let idInput = document.getElementById("idInput");
    let fnameInput = document.getElementById("fnameInput");
    let phonenumber = document.getElementById("phonenumber");
    let emailaddress = document.getElementById("emailaddress");
    let gender = document.getElementById("gender");
    let usernameInput = document.getElementById("usernameInput");
    let passwordInput = document.getElementById("passwordInput");
    let avatarInput = document.getElementById("avatarInput");

    let user = {
        id: idInput.value,
        fname: fnameInput.value,
        phonenumber: phonenumber.value,
        emailaddress: emailaddress.value,
        gender: gender.value,
        username: usernameInput.value,
        password: passwordInput.value,
        avatar: avatarInput.value
    };
    console.log(user);

    let xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/User/DeleteDetels/" + idInput.value);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(user));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            console.log("User updated successfully");
        }
        loadTable();
    };
};

// Function to open the modal and retrieve user details by ID
function showUserEditBox(id) {
    // Create new XMLHttpRequest object
    let xhttp = new XMLHttpRequest();

    // Prepare the GET request to the API endpoint
    xhttp.open("GET", "https://apex.oracle.com/pls/apex/my_stock/BLOG_SITE_USERS/User/DeleteDetels/" + id);

    // Send the GET request
    xhttp.send();

    // Handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON response
            let response = JSON.parse(this.responseText);
            // Get the user details
            let user = response.items[0];
            console.log(user);

            // Get the modal element
            let modal = document.getElementById("myModal");
            // Show the modal
            modal.style.display = "block";

            // Get the input elements
            let idInput = document.getElementById("idInput");
            let fnameInput = document.getElementById("fnameInput");
            let phonenumber = document.getElementById("phonenumber");
            let emailaddress = document.getElementById("emailaddress");
            let gender = document.getElementById("gender");
            let usernameInput = document.getElementById("usernameInput");
            let passwordInput = document.getElementById("passwordInput");
            let avatarInput = document.getElementById("avatarInput");

            // Pre-populate the input elements with the retrieved data
            idInput.value = user.id;
            fnameInput.value = user.fname;
            phonenumber.value = user.phonenumber;
            emailaddress.value = user.emailaddress;
            gender.value = user.gender;
            usernameInput.value = user.username;
            passwordInput.value = user.password;
            avatarInput.value = user.avatar;

            // Show the modal
            modal.style.display = "block";
        }
    };
};