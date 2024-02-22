

export const ItemList = ({item})=>{
    console.log(item);
    return(
        <div>
             {item.map((item)=>(
                <div key = {item.card.info.id}>
             <div className="flex justify-between">
               <span>{item.card.info.name}</span> 
               <span className="m-3">💰{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                </div> 
                </div>
             ))}
                
        </div>
    )
}