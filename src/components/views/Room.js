import React from "react";


import "./../../stylesheets/global.css";
export default function Room() {
    return(<>

<div>
    <div id="menuCard">
      <h1 className="display-4">Game Tables</h1>
      <p className="lead">Select a table below to start...</p>
      <hr className="my-4" />
      
      <a href="/logout" className="btn btn-primary" id= "logout">Logout</a>

    </div>
      <div id="dateTableHolding">


        



        <div className="card table" >
          <img src="/assets/waiting.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <p>Player ID: nnwkwndsdsffn</p>
              <p>Player ID: nnwksdbnd5fn2</p>
            </h5>

            <a href="#" className="btn btn-primary">Sit Down</a>
          </div>
        </div>
        <div className="card table" >
          <img src="/assets/dateInProgress.png" className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">
                  <p>Player ID: nnwkwndsdsffn</p>
                  <p>Player ID: nnwksdbnd5fn2</p>
                </h5>
                <a href="#" className="btn btn-primary">View</a>

           
          </div>
        </div>
   
      </div>
    </div>


        </>
    )
}