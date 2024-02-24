import React from 'react';


import { ItemList } from "./ItemList";

 export const RestuarantCategory = ({data,setIndex,showIndexValue,setClose})=>{
    
  const onclicked = ()=>{
   (showIndexValue === true)?setClose():setIndex();
  }

    return(
        <div className=" border-2 border-sky-500 m-10 p-10 bg-slate-200 shadow-2xl " >
            <div className="flex justify-between cursor-pointer" onClick={()=>onclicked()}>
                <span className="text-2xl">{data.title} ({data.itemCards.length})</span>
              <div>
                {(showIndexValue)?"🔼":"🔽"}
                </div>  
              
            </div>
            <div className="text-center m-3">
               {showIndexValue && <ItemList item = {data.itemCards}/>}
            </div>
            
            
        </div>
    )
}