
import ResCard from "./Rescard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    let [hotel,setHotel] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    

    async function fetchData(){
        let data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.000658&lng=77.0295709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        let json = await data.json();
        console.log(json);
        const mainData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setHotel(mainData);
    }

    if(hotel.length === 0){
        return (<Shimmer/>)
    }
    
    return (
        <div className = "body">
            <div className = "button">
              <button onClick = {
                ()=>{
                    
                let filter = hotel.filter((res) => res.info.avgRating >= 4.5);
                setHotel(filter);
                 
            }
                 }>Top Rated</button>
                </div>
            <div className="rescontainer">
                {
                    hotel.map((item,index)=>
                        (
                            <ResCard key = {index} resName ={item.info}/>
                        )
                    )
                }
                
            </div>
        </div>
    )
     
    
}

export default Body;