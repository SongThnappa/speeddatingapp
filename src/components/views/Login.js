import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../stylesheets/global.css";
import MyVerticallyCenteredModal from "./../myVerticallyCenteredMondal";
import axios from 'axios';




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

    axios.post(`/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
 
  

   render(){
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
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
  <ButtonToolbar>
      <Button id="newUser" onClick={() => setModalShow(true)}>
      
      Register
    </Button>

    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </ButtonToolbar>
             </form>
         </div>
      
         <div id="myModal" className="modal">
      
          
           <div className="modal-content">
            
      
     
             
    
        </div>    
     </div>
    </>
     );
   }
    
   }
