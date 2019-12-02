//Global Component Dependencies 
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
  } from "react-router-dom";


  //Component Specific Styles
  import "./styles_AppComponent.css"

  // Local Dependencies
  import Login from "./../Login/Login"
  import Room from "./../Waiting_Room/WaitingRoom";
  import Chat from "./../Chat_Room/Chat";


class App extends React.Component{
constructor(){
    super()
    this.state={}
}

render(){
    return(
        <Router>
        <div>
           
        
         
         
         <Switch>
         <Route exact path="/">
           <Login />
         </Route>
         <Route path="/Login">
           <Login />
         </Route>
         <Route path="/waitingRoom/success">
           <Room />
         </Route>
         <Route path="/game/:gameID">
           <Chat />
         </Route>
       </Switch>
       </div>
       </Router>
    )
}



}

export default App