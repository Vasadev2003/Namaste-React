
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import { RestuarantCategory } from "./RestaurantCategory";

 const MenuCard = ()=>{

      const {resId} = useParams();
    
      const resInfo = useRestMenu(resId);      
      

 if(resInfo === null) return <Shimmer/>; 
     
    const {name,costForTwoMessage,cuisines} = resInfo.cards[2].card.card.info;
    
    const info = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
     
 

    const filtered = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((card)=>card.card?.["card"]?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    
    console.log(filtered);
    
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl m-3">{name}</h1>
            <p className="text-xl m-2">
                {cuisines.join(",")}-{costForTwoMessage}
            </p>
         <div>
            {filtered.map((cat)=><RestuarantCategory data = {cat.card.card}/>)
            }
            </div>  
         
            
    </div>
    )
}

export default MenuCard;