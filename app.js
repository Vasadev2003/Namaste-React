import React from "react"
import ReactDOM from "react-dom/client"

// Swiggy App

//header

const Header = () =>{
    return (
    <header>
        <img src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?size=338&ext=jpg&ga=.1.1448711260.1706486400&semt=ai" className="image"></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <li>Contact Us</li>
      </ul>
    </header>
    )
};

const hotelList = [{
    name : "A1",
    cusine : "Biriyani",
    rating : "4.5",
    time : "25 minutes"

},
{
    name : "Jayarani",
    cusine : "Parotta",
    rating : "4.5",
    time : "25 minutes"

},
{
    name : "Vaigai",
    cusine : "Dosa",
    rating : "4.5",
    time : "25 minutes"

},
{
    name : "Food court",
    cusine : "Idly",
    rating : "4.5",
    time : "25 minutes"

},
{
    name : "Shanthi Social Service",
    cusine : "Veg biriyani",
    rating : "4.5",
    time : "25 minutes"
}

]

const ResCard = (props) =>{
    const {resName} = props;
    const {name , cusine , time , rating} = resName;
    return (
        <div className = "rescard">
            <img src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?size=338&ext=jpg&ga=.1.1448711260.1706486400&semt=ai"></img>
            <h1>{name}</h1>
            <h2>{cusine}</h2>
            <h3>{time}</h3>
            <h3>{rating}</h3>
        </div>
    )
}

const Body = () =>{
    return (
        <div className = "body">
            <div className = "search">Search</div>
            <div className="rescontainer">
                {
                    hotelList.map((item,index)=>
                        (
                            <ResCard key = {index} resName ={item}/>
                        )
                    )
                }
                
            </div>
        </div>
    )
     
    
}












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

