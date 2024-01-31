import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return (
    <header>
        <img src={LOGO_URL} className="image"></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <li>Contact Us</li>
      </ul>
    </header>
    )
};

export default Header;