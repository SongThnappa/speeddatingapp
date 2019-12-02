import React from "react"
import Login from "./views/Login"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import Room from "./views/Room";
  import Chat from "./views/Chat";

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