import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const MyCart = ()=>{

   const dispatch = useDispatch();

   const deleteCart = ()=>{
    dispatch(clearCart());
   }


    const cartItems = useSelector((store)=>store.cart.items)
    return (
       
     
        <div>
            <p className="text-center">Welcome to The Cart</p>
               <button className="p-3 rounded-lg text-white bg-slate-600" onClick={deleteCart}>Clear</button>
            <ItemList item = {cartItems}/>
            {cartItems.length === 0 && <p>Please Add Some Items To The Cart!!!...</p>}
        </div>
    )
}

export default MyCart;