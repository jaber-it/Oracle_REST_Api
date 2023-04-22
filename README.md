# Oracle_REST_Api
Oracle REST API Use Insert, Update, Delete, Login All Script In one File, HTML CSS JavaScript Faction

1. Folder Export Oracle App Use REST API And Save Google Sheets.
2.  Insert, Update, Delete, Login All Script In one File, HTML CSS JavaScript Faction

<style>
<link href='https://github.com/jaber-it/Oracle_REST_Api/blob/main/Sliding-Sign-In-Sign-Up-Form-master/BlogSite_Use_Fole/style.css'/>



  <link  href='https://cdn.jsdelivr.net/gh/jABER-IT/Oracle_REST_Api/Sliding-Sign-In-Sign-Up-Form-master/BlogSite_Use_Fole/style.css' 
     rel='stylesheet' />
</style>
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
     src='https://cdn.jsdelivr.net/gh/jABER-IT/Oracle_REST_Api/Sliding-Sign-In-Sign-Up-Form-master/BlogSite_Use_Fole/Script1.js'>  </script> 
   <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js'>  </script> 
   <script> 
     loadUser(sessionStorage.getItem("jwt")); 
     checkJWT(); 
     showhide(); 
   </script>