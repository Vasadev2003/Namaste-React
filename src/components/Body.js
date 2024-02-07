
import ResCard from "./Rescard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { CARD_API } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () =>{

    let [hotel,setHotel] = useState([]);
    let [filteredRes,setFilteredRes] = useState([]);
    let [searchText ,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])
    
  
    async function fetchData(){
        let data =  await fetch(CARD_API);

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
                    filteredRes.map((item)=>
                        (
                            <Link key = {item.info.id} to={"/restaurant/"+item.info.id}> <ResCard  resName ={item.info}/></Link>
                           
                        )
                    )
                }
                
            </div>
        </div>
    )
     
    
}

export default Body;