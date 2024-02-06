import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
const Header = () =>{

  const [btnName , setButtonName] = useState("Login")

    return (
    <header>
        <img src={LOGO_URL} className="image"></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <li>Contact Us</li>
        <button onClick = {()=>{
          (btnName === "Login") ? setButtonName("Logout"):setButtonName("Login");
        }}>{btnName}</button>
      </ul> 
    </header>
    )
};

export default Header;