import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";


 const MenuCard = ()=>{

    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);

    }

 if(resInfo === null) return <Shimmer/>; 

    const {name,cuisines,costForTwoMessage} = resInfo.cards[0].card.card.info;

    const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
     
    console.log(itemCards);
    return(
        <div className="MenuCard">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")}-{costForTwoMessage}
            </p>
            <h1>Menu</h1>
            <ul className = "list">
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                    {item.card.info.name}
                    </li>
                ))}
            </ul>
    </div>
    )
}

export default MenuCard;