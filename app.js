import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

const Name = ()=> <h1 id="jsx" className = "vasanth">Hi this from JSX</h1>

// Namaste React Functional Component

const FunctionalComponent = () =>(
    <div id="main div">
        {console.log("hi this is from curly braces")}
        <Name />
        <h1 className = "child">
            Namaste React Functional Component
        </h1>
    </div>
)

root.render(<FunctionalComponent/>);

