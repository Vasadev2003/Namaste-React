
import ResCard from "./Rescard";
import {useState,useEffect, useCallback, useContext} from "react";
import Shimmer from "./Shimmer";
import { CARD_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logginInfo from "../utils/UseContext";
const Body = () =>{

    let [hotel,setHotel] = useState([]);
    let [filteredRes,setFilteredRes] = useState([]);
    let [searchText ,setSearchText] = useState("");
    const {setData,names} = useContext(logginInfo);
    useEffect(()=>{
        fetchData();
    },[])
    
  
    async function fetchData(){
        let data =  await fetch(CARD_API);

        let json = await data.json();
        console.log(json);
        const mainData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setHotel(mainData);
        setFilteredRes(mainData);
    }

     const onlineStatus = useOnlineStatus();
      if(onlineStatus===false){
        return(
            <div>
                <h1>Oh my god!!!,Sorry You Are Offline</h1>
            </div>
        )
      }
    
    return (hotel.length === 0 ? <Shimmer/> :
        <div className = "bg-indigo-200">
            <div className="flex m-10 gap-5">
                <input className="p-2 rounded-2xl bg-emerald-50 "
                type="text" 
                value={searchText} 
                onChange ={(e)=>{
                    setSearchText(e.target.value); 
                }}
                />

                <button 
                className="p-2 rounded-2xl bg-sky-500/50 text-[15px] text-white"
                    onClick = {()=>{
                    console.log(searchText);
                    const filtered = hotel.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRes(filtered);
                }}>Search</button>
                <div>
                    <label>
                        User Name :
                    <input className="p-5 rounded-md bg-slate-400 text-white" value={names}
                    onChange={(e)=>setData(e.target.value)}
                    ></input>
                    </label>
            
            </div>
            </div>
            
            
         <div>
              <button className = " bg-sky-500/50 text-[15px] text-white ml-10 p-2 rounded-2xl"  onClick = {
                ()=>{
                    
                let filter = hotel.filter((res) => res.info.avgRating >= 4.2);
                setFilteredRes(filter);
                 
            }
                 }>Top Rated</button>
                </div>
            <div className="flex flex-wrap gap-7 justify-around items-center mt-10">
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