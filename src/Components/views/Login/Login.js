//Global Dependencies

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

  //Component Specific Styles
import "./styles_LoginComponent.css"

  // Local Dependencies
import LoginBar from "./LoginBar/LoginBar"
 

class Login extends React.Component {
 
   constructor(){
     super()
     this.state={
       email: "",
       password: ""
     }
   }

   

   handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
    axios.post(`/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
 
  

   render(){
   
    return (<>
      <LoginBar/>

            
      
         <div id="myModal" className="modal">
      
          
           <div className="modal-content">
            
      
     
             
    
        </div>    
     </div>
    </>
     );
   }
    
   }

   export default Login
