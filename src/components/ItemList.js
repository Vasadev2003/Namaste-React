import {  useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
export const ItemList = ({item})=>{
  
const dispatch = useDispatch();

const handleClick = (itemSelected)=>{
    dispatch(addItem(itemSelected));
}
    
    return(
        <div>
             {item.map((item)=>(
                <div key = {item.card.info.id}>
             <div className="flex justify-between">
               <span className="m-3">{item.card.info.name}</span> 
               <span className="m-3">💰{item.card.info.price/100 || item.card.info.defaultPrice/100}
                <button className="p-3 bg-black text-white rounded-lg ml-3" onClick={()=>handleClick(item)}>Add</button> 
                
              </span>
               
                </div>
               
                </div>
             ))}
                
        </div>
    )
}