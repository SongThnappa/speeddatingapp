import React from "react";


import "./../../stylesheets/global.css";

export default function Login() {
  // componentDidMount() {
  //   createBrowserHistory.push('/');
  // }

    return (
     <>
        <div id="titleCard"></div>
      
        <div id="loginBox">
            <form action="/login" method="POST" id="loginBoxForm">
                <h1 id="loginTitle">Player Login</h1>
                <input className="input1" name2="email" type="email" id="email" name="email" placeholder="Email"/>
                <br></br>
                <input className="input1" name2="password" type="password" id="password" name="password" placeholder="Password"/>
                <br></br>
                <button id="loginSubmit" >Log In</button>
                <br></br>
                <div id="newUser">Register</div>
            </form>
        </div>
      
        <div id="myModal" className="modal">
      
          
          <div className="modal-content">
            <span className="close" >&times;</span>
      
     
            <div id="newUserEntry">

                
              <div id="form_entry">
                <p>First Name:</p>
                <br></br> 
                <input required className="input" pattern=".[A-Za-z]{2,20}" type="text" name2="firstName" id="firstName_newUser" title="Must contain at least two characters A-Z"/>
                <p>Last Name: </p> 
                <br></br> 
                <input required className="input" pattern=".[A-Za-z]{2,20}" type="text" name2="lastName"id="lastName_newUser" title="Must contain at least two characters A-Z"/>
      
                <p>Email (Username): </p> 
                <br></br> 
                <input required className="input" type="email" name2="email2" id="email_newUser" placeholder="h@h.com"/>
      
                <p>Password:</p> 
                <br></br>
                <input required className="input" pattern=".{6,20}" type="password" name2="password" id="newPassword1" title="Must contain at least 6 characters A-Z"/>
      
                <p>Confirm Password:</p> 
                <br></br>
                <input required className="input" pattern=".{6,20}" type="password" name2="confirm" id="newPassword2"/>
      
      
                <button id="registerSubmit">Submit</button>
              </div>
              <div id="messageBox">
                <p id="passwordError"></p>
            </div>
        </div>
    
       </div>    
    </div>
   </>
    );
  }
