//Global Login
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

  //Component Specific Styles
  import "./styles_LoginBarComponent.css"

  // Local Dependencies
  import RegisterButtonModal from "./RegisterButtonModal/RegisterButtonModal"



class LoginBar extends React.Component {
  
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
                    <div id="titleCard"></div>
      
                    <div id="loginBox">
                        <form onSubmit={this.handleSubmit} id="loginBoxForm">
                        <h1 id="loginTitle">Speed Dater Login</h1>
                        <input className="input1" name2="email" type="email" id="email" name="email" placeholder="Email" onChange={this.handleChangeEmail}/>
                        <br></br>
                        <input className="input1" name2="password" type="password" id="password" name="password" placeholder="Password"onChange={this.handleChangePassword}/>
                        <br></br>
                        <button type="submit" id="loginSubmit" >Log In</button>
                        <br></br>
                        <RegisterButtonModal/>
                        </form>
                        </div>
                 </>
                 )
                 }
                 }
export default LoginBar