# Oracle_REST_Api
Oracle REST API Use Insert, Update, Delete, Login All Script In one File, HTML CSS JavaScript Faction

1. Folder Export Oracle App Use REST API And Save Google Sheets.
2.  Insert, Update, Delete, Login All Script In one File, HTML CSS JavaScript Faction



<!DOCTYPE html> 
 <!-- Created By CodingLab - www.codinglabweb.com --> 
 <html lang="en" dir="ltr"> 
  
 <head> 
   <meta charset="UTF-8"> 
   <!---<title> Responsive Registration Form | CodingLab </title>---> 
   <link rel="stylesheet" href="style.css"> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
     integrity="sha512-/yVRLYEpX75KQ+oQQDptdrNAhZiEl1A1NwKjJK0vJEN95h99lF9fjK7z6xnlx5A5U6jnkU6rYSMhDzMK8HXdWg==" 
     crossorigin="anonymous" referrerpolicy="no-referrer" /> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
 </head> 
 <style> 
  
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap'); 
 </style> 
  
 <body> 
   <div class="containerdiv"> 
     <!-- Registration Form --> 
     <div class="forms"> 
       <div class="form login"> 
         <span class="title">Login</span> 
  
         <form action="#"> 
           <div class="input-field"> 
             <span class="details">Username</span> 
             <input type="text" id="username" placeholder="Enter Your Username" required> 
             <i class="uil uil-envelope icon"></i> 
           </div> 
           <div class="input-field"> 
             <span class="details">Password</span> 
             <input type="password" id="password" class="password" placeholder="Enter Your Password" required> 
             <i class="uil uil-lock icon"></i> 
             <i class="uil uil-eye-slash showHidePw"></i> 
           </div> 
  
           <div class="checkbox-text"> 
             <div class="checkbox-content"> 
               <input type="checkbox" id="logCheck"> 
               <label for="logCheck" class="text">Remember me</label> 
             </div> 
  
             <a href="#" class="text">Forgot password?</a> 
           </div> 
  
           <div class="input-field button"> 
             <input type="button" onclick="login();" value="Login"> 
           </div> 
         </form> 
  
         <div class="login-signup"> 
           <span class="text">Not a member? 
             <a href="#" class="text signup-link">Signup Now</a> 
           </span> 
         </div> 
       </div> 
     </div> 
  
     <!-- Registration Form --> 
     <div class="form signup"> 
       <div class="title">Registration</div> 
       <div class="content"> 
         <form action="#"> 
           <div class="user-details"> 
             <div class="input-box"> 
               <span class="details">Full Name</span> 
               <input type="text" id="fnameInput" placeholder="Enter your name" required> 
             </div> 
             <div class="input-box"> 
               <span class="details">Email</span> 
               <input type="text" id="emailaddress" placeholder="Enter your email" required> 
             </div> 
             <div class="input-box"> 
               <span class="details">Phone Number</span> 
               <input type="text" id="phonenumber" placeholder="Enter your number" required> 
             </div> 
             <div class="input-box"> 
               <span class="details">Username</span> 
               <input type="text" id="usernamereg" placeholder="Enter your username" required> 
             </div> 
             <div class="input-box"> 
               <span class="details">Password</span> 
               <input type="text" id="passwordreg" placeholder="Enter your password" required> 
             </div> 
             <div class="input-box"> 
               <span class="details">Image URL</span> 
               <input type="text" id="avatar" placeholder="Enter the URL of your image"> 
             </div> 
             <div class="input-box"> 
               <span class="details">Gender</span> 
               <select id="gender" required> 
                 <option value="">Select Gender</option> 
                 <option value="male">Male</option> 
                 <option value="female">Female</option> 
                 <option value="other">Other</option> 
               </select> 
             </div> 
             <div class="input-box"> 
               <div id="imagecontainerdiv" style="margin-top: 2px;"></div> 
             </div> 
           </div> 
  
           <div class="checkbox-text"> 
             <div class="checkbox-content"> 
               <input type="checkbox" id="termCon"> 
               <label for="termCon" class="text">I accepted all terms and conditions</label> 
             </div> 
           </div> 
  
  
           <div class="button"> 
             <input type="button" onclick="insert_api_Data();" value="Signup"></input> 
           </div> 
  
           <div class="login-signup"> 
             <span class="text">Already a member? 
               <a href="#" class="text login-link">Login Now</a> 
             </span> 
           </div> 
  
  
  
         </form> 
       </div> 
     </div> 
   </div> 
  
   <!-- Add JavaScript code below this line --> 
   <script src="script.js"></script> 
   <script src="login.js"></script> 
   <script> 
       const loginForm = document.querySelector('.form.login'); 
     const signupForm = document.querySelector('.form.signup'); 
     const loginLink = document.querySelector('.login-link'); 
     const signupLink = document.querySelector('.signup-link'); 
  
     loginLink.addEventListener('click', function () { 
       loginForm.style.display = 'block'; 
       signupForm.style.display = 'none'; 
     }); 
  
     signupLink.addEventListener('click', function () { 
       signupForm.style.display = 'block'; 
       loginForm.style.display = 'none'; 
     }); 
  
     // Get the image URL input element 
     const imageUrlInput = document.getElementById('avatar'); 
     const imgdesply = document.getElementById("imagecontainerdiv"); 
  
     function displayImage() { 
       const imageUrl = imageUrlInput.value; 
       imagecontainerdiv.innerHTML = `<img src="${imageUrl}" style="max-width: 114px; border-radius: 10px; height: 65px;">`; 
     } 
  
     // Add an event listener to the image URL input box 
     imageUrlInput.addEventListener('input', displayImage); 
   </script> 
   <img src="https://cdms.police.gov.bd/cdms/r/cdmsbase/files/static/v7Y/police-logo.png" id="refresh-icon" 
     style="display:none;"> 
   <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script> 
  
  
 </body> 
  
 </html>