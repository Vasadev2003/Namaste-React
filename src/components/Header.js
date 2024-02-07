import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
const Header = () =>{

  const [btnName , setButtonName] = useState("Login")

    return (
    <header>
        <img src={LOGO_URL} className="image"></img>
      <ul>
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
        <button onClick = {()=>{
          (btnName === "Login") ? setButtonName("Logout"):setButtonName("Login");
        }}>{btnName}</button>
      </ul> 
    </header>
    )
};

export default Header;