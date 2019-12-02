import React from "react"
import axios from "axios"

class RegisterForm extends React.Component {
    constructor(){
        super()
        this.state={
          email: "",
          first:"",
          last:"",
          password: "",
          confirm:""
        }
      }
   
      
   
      handleChangeEmail = event => {
       this.setState({ email: event.target.value });
     }
     handleChangeFirst = event => {
        this.setState({ first: event.target.value });
      }
      handleChangeLast = event => {
        this.setState({ last: event.target.value });
      }
     handleChangePassword = event => {
       this.setState({ password: event.target.value });
     }
     handleChangeConfirm = event => {
        this.setState({ confirm: event.target.value });
      }
   
     handleSubmit = event => {
       event.preventDefault();
   
       const user = {
         email: this.state.email,
         first: this.state.first,
         last: this.state.last,
         password: this.state.password,
         confirm: this.state.confirm
       };
       console.log(user);

       axios.post(`/register`, { user })
         .then(res => {
           console.log(res);
           console.log(res.data);
         })
     }
    
    render(){
          return (
        <>
             <div id="newUserEntry">

                
<div id="form_entry">



  <p>First Name:</p>
  <br></br> 
  <input required className="input" 
  pattern=".[A-Za-z]{2,20}" 
  type="text" 
  name2="firstName" 
  id="firstName_newUser" 
  title="Must contain at least two characters A-Z"
  onChange={this.handleChangeFirst}/>




  <p>Last Name: </p> 
  <br></br> 
  <input required className="input" pattern=".[A-Za-z]{2,20}" 
  type="text" 
  name2="lastName"
  id="lastName_newUser" 
  title="Must contain at least two characters A-Z"
  onChange={this.handleChangeLast}/>




  <p>Email (Username): </p> 
  <br></br> 
  <input required className="input" 
  type="email" 
  name2="email2" 
  id="email_newUser" placeholder="h@h.com"
  onChange={this.handleChangeEmail}/>




  <p>Password:</p> 
  <br></br>
  <input required className="input" pattern=".{6,20}" 
  type="password" 
  name2="password" 
  id="newPassword1" 
  title="Must contain at least 6 characters A-Z"
  onChange={this.handleChangePassword}/>




  <p>Confirm Password:</p> 
  <br></br>
  <input required className="input" pattern=".{6,20}" 
  type="password" 
  name2="confirm" 
  id="newPassword2"
  onChange={this.handleChangeConfirm}/>


  <button id="registerSubmit"
  onClick={this.handleSubmit}>Submit</button>
</div>
<div id="messageBox">
  <p id="passwordError"></p>
</div>
</div>
        </>
    )
    }
  
}

export default RegisterForm;