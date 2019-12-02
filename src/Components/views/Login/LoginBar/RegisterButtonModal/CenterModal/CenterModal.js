// Global Dependencies

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


  //Component Specific Styles
  import "./styles_CenterModalComponent.css"

  // Local Dependencies
import RegisterForm from "./RegisterForm/RegisterFrom"




export default function CenterModal(props) {
  
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
     <RegisterForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}