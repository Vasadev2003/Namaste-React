import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{

  const [btnName , setButtonName] = useState("Login")
  const onlineStatus = useOnlineStatus();
    return (
    <header className="flex justify-between items-center bg-blue-100 shadow-xl w-[100%] ">
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
        <button onClick = {()=>{
          (btnName === "Login") ? setButtonName("Logout"):setButtonName("Login");
        }}>{btnName}</button>
      </ul> 
    </header>
    )
};

export default Header;