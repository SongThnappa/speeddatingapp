import React from 'react'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

import CenterModal from "./CenterModal/CenterModal";

export default function RegisterButtonModal() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            
  <ButtonToolbar>
      <Button id="newUser" onClick={() => setModalShow(true)}>
      
      Register
    </Button>

    <CenterModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </ButtonToolbar>
        </div>
    )
}
