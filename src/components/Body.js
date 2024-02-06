
import ResCard from "./Rescard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    let [hotel,setHotel] = useState([]);
    let [filteredRes,setFilteredRes] = useState([]);
    let [searchText ,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])
    
    console.log("headser reere")
    async function fetchData(){
        let data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.081872553043636&lng=80.264821818926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        let json = await data.json();
        console.log(json);
        const mainData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setHotel(mainData);
        setFilteredRes(mainData);
    }

    
    return (hotel.length === 0 ? <Shimmer/> :
        <div className = "body">
            <div className="filter">
                <input 
                type="text" 
                value={searchText} 
                onChange ={(e)=>{
                    setSearchText(e.target.value); 
                }}
                />

                <button 
                    onClick = {()=>{
                    console.log(searchText);
                    const filtered = hotel.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRes(filtered);
                }}>Search</button>
            </div>
            
            
         <div className = "button">
              <button onClick = {
                ()=>{
                    
                let filter = hotel.filter((res) => res.info.avgRating >= 4.2);
                setFilteredRes(filter);
                 
            }
                 }>Top Rated</button>
                </div>
            <div className="rescontainer">
                {
                    filteredRes.map((item,index)=>
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