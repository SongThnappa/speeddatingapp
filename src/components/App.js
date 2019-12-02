import React from "react"
import Login from "./views/Login"

class App extends React.Component{
constructor(){
    super()
    this.state={}
}

render(){
    return(
        <div>
            <Login/>
        </div>
    )
}



}

export default App