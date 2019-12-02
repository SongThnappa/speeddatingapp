 //Global Component Dependencies 



import React from "react";
import uuid from "react-uuid"

  //Component Specific Styles
  import "./styles_WaitingRoomComponent.css"

  // Local Dependencies
import GameCards from "./GameCards/GameCards";




export default function Room () {
   
    return(<>

<div>
    <div id="menuCard">
      <h1 className="display-4">Dating Tables</h1>
      <p className="lead">Select a table below to start...</p>
      <hr className="my-4" />
      
      <a href="/logout" className="btn btn-primary" id= "logout">Logout</a> 

    </div>
      <div id="dateTableHolding">

                <GameCards 
                cardKey = "1"
                cardType = "newGame"
                imgClass="newGame-img"
                gameID = {uuid()}
                path ="/game/"
                button="NewGame" 
                />
        


                    <GameCards 
                    cardKey = "2"
                    cardType = "Sit Down"
                    imgClass="Play-img"
                    gameID = {uuid()}
                     path ="/game/"
                    button="Sit Down" />

                    <GameCards 
                    cardKey = "3"
                    cardType = "ViewGame"
                    imgClass= "viewGame-img"
                    gameID = {uuid()}
                    path ="/viewOnly/"
                    button="View Game" />
  
    
   
                    </div>
                </div>


            </>
     )
    
}