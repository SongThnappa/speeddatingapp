import React from 'react'

export default function GameCards(props) {
    return (
        
        <div className={props.cardType + " card table"} >
            <div className={props.imgClass + " card-img-top"}> </div>
            <div className="card-body">
            <h5 className="card-title">
            <p>Game ID : {props.gameID.slice(0,6).toUpperCase()}</p>
            </h5>

            <a href={props.path + props.gameID} className="btn btn-primary">{props.button}</a>
          </div>
        </div> 
        
 
        
        
    )
}
