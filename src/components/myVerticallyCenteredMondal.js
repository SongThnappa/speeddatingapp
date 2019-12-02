import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../stylesheets/global.css";




export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="model-content" 
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         New User Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}