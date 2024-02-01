
import ResCard from "./Rescard";
import hotelList from "./List";
import {useState} from "react";

const Body = () =>{

    let [hotel,setHotel] = useState(hotelList);



    return (
        <div className = "body">
            <div className = "button">
              <button onClick = {
                ()=>{
                    
                let filter = hotel.filter((res) => res.rating > 4);
                setHotel(filter);
                 
            }
                 }>Top Rated</button>
                </div>
            <div className="rescontainer">
                {
                    hotel.map((item,index)=>
                        (
                            <ResCard key = {index} resName ={item}/>
                        )
                    )
                }
                
            </div>
        </div>
    )
     
    
}

export default Body;