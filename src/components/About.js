import AboutClass from "./UserClass";
import React from "react";

class About extends React.Component{
    
    constructor(props){
        super(props)
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Mount");
    }

    render(){
        console.log("Parent Render");
        return (
            <div>
            <AboutClass />
           
            </div>
            
        )
 
    }
}



export default About;