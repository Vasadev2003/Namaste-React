
import ResCard from "./Rescard";
import hotelList from "./List";

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

export default Body;