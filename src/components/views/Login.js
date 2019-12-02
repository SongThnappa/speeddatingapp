import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../stylesheets/global.css";
import MyVerticallyCenteredModal from "./../myVerticallyCenteredMondal";


export default function Login() {
  const [modalShow, setModalShow] = React.useState(false);
  


     return (
      <>
         <div id="titleCard"></div>
      
         <div id="loginBox">
             <form action="/login" method="POST" id="loginBoxForm">
                 <h1 id="loginTitle">Speed Dater Login</h1>
                 <input className="input1" name2="email" type="email" id="email" name="email" placeholder="Email"/>
                 <br></br>
                 <input className="input1" name2="password" type="password" id="password" name="password" placeholder="Password"/>
                 <br></br>
                 <button id="loginSubmit" >Log In</button>
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
