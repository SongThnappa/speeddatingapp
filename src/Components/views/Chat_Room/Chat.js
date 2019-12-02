 //Global Component Dependencies 

import React from "react";

  //Component Specific Styles
  import "./styles_ChatRoomComponent.css"

  // Local Dependencies


export default function Chat() {
    return(<>

<div id="titleCardSmall"></div>
     








 <div id="mainChat" className="mainCHat">

 
   <div className="modal-content">
    


     <div className="chatBoxContainer" id="newUserEntry">
       <div className="chatBox"></div>

     </div>

     <div id="chatInputDiv" >
       <input id="chatInput" type="text"/>
       <br></br>
       <div className="submit sendmessage" id="registerSubmit">Send Message</div>
     </div>

   </div>
   </div>


        </>
    )
}