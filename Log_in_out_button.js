import React from "react"



class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLogged : true
        }
        this.reversal = this.reversal.bind(this)
    }
    reversal(){
        console.log(this.state.isLogged ? "Logged out" : "Logged in")
        this.setState(prevState => {
            
                return{
                    isLogged : !prevState.isLogged
                }
            
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.isLogged ? "Logged in" : "Logged out"}</h1>
                <button onClick = {this.reversal}>{this.state.isLogged ? "Log out" : "Log in"}</button> 
            </div>
        )
    }
}

export default App
