# Oracle_REST_Api
Oracle REST API Use Insert, Update, Delete, Login All Script In one File, HTML CSS JavaScript Faction

1. Folder Export Oracle App Use REST API And Save Google Sheets.
2.  Insert, Update, Delete, Login All Script In one File, HTML CSS JavaScript Faction


<!DOCTYPE html> 
 <!-- Created By CodingLab - www.codinglabweb.com --> 
 <html lang="en" dir="ltr"> 
  
 <head> 
   <meta charset="UTF-8"> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
     integrity="sha512-/yVRLYEpX75KQ+oQQDptdrNAhZiEl1A1NwKjJK0vJEN95h99lF9fjK7z6xnlx5A5U6jnkU6rYSMhDzMK8HXdWg==" 
     crossorigin="anonymous" referrerpolicy="no-referrer" /> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
   <link 
     href='https://cdn.jsdelivr.net/gh/jABER-IT/Oracle_REST_Api/Sliding-Sign-In-Sign-Up-Form-master/BlogSite_Use_Fole/style.css' 
     rel='stylesheet' /> 
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap'); 
 .signup { 
   display: none; 
 } 
  
 .containerdiv { 
     width: 100%; 
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif; 
 } 
  
 .containerdiv .form { 
   border-radius: 20px; 
   transition: margin-left 0.18s ease; 
   border: 1px solid #670202; 
   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15); 
   padding: 35px; 
 } 
  
 .containerdiv .title { 
   font-size: 25px; 
   font-weight: 500; 
   position: relative; 
 } 
  
 .containerdiv .title::before { 
   content: ""; 
   position: absolute; 
   left: 0; 
   bottom: 0; 
   height: 3px; 
   width: 30px; 
   border-radius: 5px; 
   background: linear-gradient(135deg, #71b7e6, #9b59b6); 
 } 
  
 .content form .user-details { 
   display: flex; 
   flex-wrap: wrap; 
   justify-content: space-between; 
   margin: 0px 0 12px 0; 
 } 
  
 form .user-details .input-field { 
   margin-bottom: 1px; 
   width: calc(50% - 22px); 
 } 
  
 form .user-details .input-field span.details { 
   display: contents; 
   font-weight: 500; 
   margin-bottom: 5px; 
 } 
  
 form .input-field span.details { 
   display: contents; 
   font-weight: 500; 
   margin-bottom: 5px; 
 } 
  
 .user-details .input-field input, 
 .user-details select { 
   height: 45px; 
   width: 100%; 
   outline: none; 
   font-size: 16px; 
   border-radius: 5px; 
   padding-left: 15px; 
   border: 1px solid #ffb8b8; 
   border-bottom-width: 2px; 
   transition: all 0.3s ease; 
 } 
  
 .user-details .input-field input:focus, 
 .user-details .input-field input:valid { 
   border-color: #9b59b6; 
 } 
  
 .form .input-field { 
   position: relative; 
   width: 100%; 
   margin-top: 15px; 
 } 
  
 .input-field input { 
   height: 45px; 
   width: 100%; 
   outline: none; 
   font-size: 16px; 
   border-radius: 5px; 
   padding-left: 15px; 
   border: 1px solid #ffb8b8; 
   border-bottom-width: 2px; 
   transition: all 0.3s ease; 
 } 
  
 .input-field input:focus, 
 .input-field input:valid { 
   border-bottom-color: #4070f4; 
 } 
  
 .input-field i { 
   position: absolute; 
   top: 50%; 
   transform: translateY(-50%); 
   color: #999; 
   font-size: 23px; 
   transition: all 0.2s ease; 
 } 
  
 .input-field input:focus ~ i, 
 .input-field input:valid ~ i { 
   color: #4070f4; 
 } 
  
 .input-field i.icon { 
   left: 0; 
 } 
  
 .input-field i.showHidePw { 
   right: 0; 
   cursor: pointer; 
   padding: 10px; 
 } 
  
  
   .form .checkbox-text { 
     display: flex; 
     align-items: center; 
     justify-content: space-between; 
     margin-top: 15px; 
   } 
  
   .checkbox-text .checkbox-content { 
     display: flex; 
     align-items: center; 
   } 
  
   .checkbox-content input { 
     margin-right: 10px; 
     accent-color: #4070f4; 
   } 
  
   @media(max-width: 584px) { 
     .containerdiv { 
       max-width: 100%; 
     } 
  
     form .user-details .input-field { 
       margin-bottom: 10px; 
       width: 100%; 
     } 
  
     form .category { 
       width: 100%; 
     } 
 /* 
     .content form .user-details { 
       max-height: 300px; 
       overflow-y: scroll; 
     } 
 */ 
     .user-details::-webkit-scrollbar { 
       width: 5px; 
     } 
   } 
  
   @media(max-width: 459px) { 
     .containerdiv .content .category { 
       flex-direction: column; 
     } 
   } 
  
   .login-signup { 
     margin-top: 30px; 
     text-align: center; 
   } 
  
  
    
  
 /* Card View Css Code...*/ 
 .card { 
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif; 
   display: flex; 
   flex-direction: column; 
   align-items: center; 
   padding: 20px; 
   border: 1px solid #491e1e; 
   border-radius: 30px; 
   box-shadow: 7px 7px 10px rgb(33 2 2 / 64%); 
   margin-top: 15px; 
   transition: all 0.3s ease-in-out; 
 } 
  
 .card:hover { 
   transform: scale(1.00); 
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
 } 
  
 .img-wrapper { 
   position: relative; 
   width: 150px; 
   height: 150px; 
   margin-bottom: 32px; 
   overflow: hidden; 
   border-radius: 50%; 
 } 
  
 .img-wrapper img { 
   width: 100%; 
   height: auto; 
   display: block; 
   transition: all 0.3s ease-in-out; 
 } 
  
 .img-wrapper:hover img { 
   transform: scale(1.2); 
 } 
  
 .overlay { 
   position: absolute; 
   top: 0; 
   left: 0; 
   width: 100%; 
   height: 100%; 
   background: rgba(0, 0, 0, 0.5); 
   opacity: 0; 
   transition: all 0.3s ease-in-out; 
 } 
  
 .img-wrapper:hover .overlay { 
   opacity: 1; 
 } 
  
 .details { 
   text-align: center; 
 } 
  
 h2 { 
   margin: 0; 
   font-size: 24px; 
   font-weight: 600; 
   margin-bottom: 5px; 
 } 
  
 .contact-info { 
   margin-top: 8px; 
   margin-bottom: 10px; 
 } 
  
 .contact-info ul { 
   text-align: left; 
   list-style: none; 
   padding: 0; 
   margin: 0; 
 } 
  
 .contact-info li { 
   display: flex; 
   align-items: center; 
   margin-bottom: 10px; 
 } 
  
 .contact-info li i { 
   margin-right: 10px; 
   font-size: 18px; 
 } 
  
 .show { 
   display: flex; 
 } 
  
 .hide { 
   display: none; 
 } 
  
 .mybutton5 { 
   border: none; 
   outline: none; 
   text-align: center; 
   font-size: 15px; 
   padding: 10px 22px; 
   background-color: #000000; 
   color: white; 
   cursor: pointer; 
   width: 100%; 
   height: auto; 
   border-radius: 30px; 
   margin-top: 20px; 
 } 
  
 .mycenter { 
   width: 100%; 
   display: flex; 
   align-items: center; 
   justify-content: space-evenly; 
 } 
  
 .mybutton5:hover { 
   background-color: #ff0000 
 } 
  
 .mybutton6 { 
   border: none; 
   outline: none; 
   text-align: center; 
   font-size: 15px; 
   padding: 10px 22px; 
   background-color: #277c12; 
   color: white; 
   cursor: pointer; 
   width: 100%; 
   height: auto; 
   border-radius: 30px; 
   margin-top: 20px; 
 } 
  
 .mybutton6:hover { 
   background-color: #a10000; 
 } 
  
 .titlelogin { 
   font-family: var(--title-font); 
   font-weight: 800; 
   border: 1px solid #3bda13; 
   border-radius: 10px; 
   padding: 10px; 
 } 
  
 .fullbody { 
   padding: 8px; 
 } 
  
 .fullbody2 { 
   padding: 8px; 
 }
</style>
 </head> 
  
 <body> 
   <div class="containerdiv"> 
     <!-- Registration Form --> 
     <div class="form login" id="loginForm"> 
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
  
         <div class="mycenter"> 
           <button class="mybutton5" type="button" onclick="logvalidateForm()">Login</button> 
         </div> 
         <!-- 
           <div class="input-field button"> 
             <input type="submit" onclick="logvalidateForm()" value="Login"> 
           </div> 
           --> 
       </form> 
  
       <div class="login-signup"> 
         <span class="text">Not a member? 
           <a href="#" class="text signup-link">Create New Account</a> 
         </span> 
       </div> 
     </div> 
  
  
     <!-- Registration Form --> 
     <div class="form signup" id="signupForm"> 
       <div class="title">Registration</div> 
       <div class="content"> 
         <form action="#"> 
           <div class="user-details"> 
             <div class="input-field"> 
               <span class="details">Full Name</span> 
               <input type="text" id="fnameInput" placeholder="Enter your name" required> 
             </div> 
             <div class="input-field"> 
               <span class="details">Email</span> 
               <input type="text" id="emailaddress" placeholder="Enter your email" required> 
             </div> 
             <div class="input-field"> 
               <span class="details">Phone Number</span> 
               <input type="text" id="phonenumber" placeholder="Enter your number" required> 
             </div> 
             <div class="input-field"> 
               <span class="details">Username</span> 
               <input type="text" id="usernamereg" placeholder="Enter your username" required> 
             </div> 
             <div class="input-field"> 
               <span class="details">Password</span> 
               <input type="text" id="passwordreg" placeholder="Enter your password" required> 
             </div> 
             <div class="input-field"> 
               <span class="details">Image URL</span> 
               <input type="text" id="avatar" placeholder="Enter the URL of your image"> 
             </div> 
             <div class="input-field"> 
               <span class="details">Gender</span> 
               <select id="gender" required> 
                 <option value="">Select Gender</option> 
                 <option value="male">Male</option> 
                 <option value="female">Female</option> 
                 <option value="other">Other</option> 
               </select> 
             </div> 
             <div class="input-field"> 
               <div id="imagecontainerdiv" style="margin-top: 2px;"></div> 
             </div> 
           </div> 
           <div class="checkbox-text"> 
             <div class="checkbox-content"> 
               <input type="checkbox" id="termCon"> 
               <label for="termCon" class="text">I accepted all terms and conditions</label> 
             </div> 
           </div> 
           <div class="mycenter"> 
             <button class="mybutton6" type="button" onclick="validateForm()">Create New Account</button> 
           </div> 
           <!-- 
           <div class="button"> 
             <input type="button" onclick="validateForm();" value="Signup"> 
           </div> 
 --> 
           <div class="login-signup"> 
             <span class="text">Already a member? 
               <a href="#" class="text login-link">Login Now</a> 
             </span> 
           </div> 
  
  
  
         </form> 
       </div> 
     </div> 
   </div> 
  
   <script 
     src='https://cdn.jsdelivr.net/gh/jABER-IT/Oracle_REST_Api/Sliding-Sign-In-Sign-Up-Form-master/BlogSite_Use_Fole/Script.js'>  </script> 
   <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js'>  </script> 
   <script> 
     loadUser(sessionStorage.getItem("jwt")); 
     checkJWT(); 
     showhide(); 
   </script> 
 </body> 
  
 </html>