import React, { Component } from "react";
import { browserHistory } from 'react-router';



export default class Login extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
        <>
        <div id="titleCard">

        </div>
      
        <div id="loginBox">
            <form action="/login" method="POST" id="loginBoxForm">
                <h1 id="loginTitle">Player Login</h1>
                <input class="input1" ref="email" type="email" id="email" name="email" placeholder="Email"/>
                <br></br>
                <input class="input1" ref="password" type="password" id="password" name="password" placeholder="Password"/>
                <br></br>
                <button id="loginSubmit" style="background-color: red; border: 3px solid black;">Log In</button>
                <br></br>
                <div id="newUser">Register</div>
            </form>
        </div>
      
        <div id="myModal" class="modal">
      
          
          <div class="modal-content">
            <span class="close" style="color: rgb(34, 194, 223)">&times;</span>
      
      {/* probably should make this a component vv */}
            <div id="newUserEntry">

                
              <div id="form_entry">
                <p>First Name:</p>
                <br></br> 
                <input required class="input" pattern=".[A-Za-z]{2,20}" type="text" ref="firstName" id="firstName_newUser" title="Must contain at least two characters A-Z"/>
                <p>Last Name: </p> 
                <br></br> 
                <input required class="input" pattern=".[A-Za-z]{2,20}" type="text" ref="lastName"id="lastName_newUser" title="Must contain at least two characters A-Z"/>
      
                <p>Email (Username): </p>
                <br></br> 
                <input required class="input" type="email" ref="email2" id="email_newUser" placeholder="h@h.com"/>
      
                <p>Password:</p> 
                <br></br>
                <input required class="input" pattern=".{6,20}" type="password" ref="password" id="newPassword1" title="Must contain at least 6 characters A-Z"/>
      
                <p>Confirm Password:</p> 
                <br></br>
                <input required class="input" pattern=".{6,20}" type="password" ref="confirm" id="newPassword2"/>
      
      
                <button id="registerSubmit">Submit</button>
              </div>
              <div id="messageBox">
                <p id="passwordError"></p>
            </div>
        </div>
      {/* to here ^^ not right now though let me make sure this works*/}
       </div>    
    </div>
      </>
    );
  }
}