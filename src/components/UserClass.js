import React from "react";

class AboutClass extends React.Component{
    constructor(props){
        super(props)
        
        this.state  = {
            name : "vasanth",
            location : "america",
            avatar : "sdhvbfjks",
            
        };
     console.log("child constructor");
    }

  async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json  = await data.json();
        console.log(json); 
        this.setState({
            name : json.name,
            avatar : json.avatar_url,
            location : json.location,
            company : json.company,
            login:json.login
        })
    }


    render(){
        console.log("child render");
       let {name,location,avatar,company,login} = this.state;
       
        
        return (
            <div>
                <h1>Name :{name}</h1>
                <h1>Locality :{location}</h1>
                <img src={avatar}></img>
                <h1>Login :{company} </h1>
                 <h1>Company :{login}</h1>
            </div>
        )
    }

    }

export default AboutClass;
