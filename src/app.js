import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

// Swiggy App


const AppLayout = () =>{
    return(
        <div className ="main">
        <Header></Header>
        <Body />
        </div>
        
       
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>);

