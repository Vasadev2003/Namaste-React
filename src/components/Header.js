import { LOGO_URL } from "../utils/constants";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logginInfo from "../utils/UseContext";
import { useSelector } from "react-redux";
const Header = () =>{

  const [btnName , setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {names} = useContext(logginInfo);
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
    return (
    <header className="flex justify-between items-center bg-blue-100 shadow-xl w-[100%]  ">
        <img src={LOGO_URL} className="w-[120px] h-[120px]" ></img>
      <ul className="flex items-center m-10 gap-4">
        <li>
         Online Status :  {(onlineStatus?"✅":"🟥")}
        </li>
        <li>
         <Link to="/">Home</Link> 
        </li>
        <li>
        <Link to="/about"> About</Link> 
          </li>
        <li>Cart</li>
        <li >
         <Link to ="/contactus"> Contact Us</Link>
          </li>
          <li >
         <Link to ="/groceries"> Grocery Us</Link>
          </li>
          <li>
         <Link to ="/cart"><p>Cart Items = {cartItems.length}</p></Link>   
          </li>
        <button onClick = {()=>{
          (btnName === "Login") ? setButtonName("Logout"):setButtonName("Login");
        }}>{btnName}</button>
         <li >
         <p>{names}</p>
          </li>
      </ul> 
    </header>
    )
};

export default Header;