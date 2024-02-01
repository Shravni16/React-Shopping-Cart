import { Link } from "react-router-dom";

import "./component.css";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {

  return (
  <div className="top-nav"><div className="nav-wrapper">
    <Link to="/">
    <img  className="logo"src="https://ecomzy-shopping-cart.vercel.app/logo.png"/></Link>
    <div className="cart-home">
    <Link to="/">Home</Link>
    <Link to="/cart">
    <FaCartShopping className="cart-img" /></Link>

    </div>
  </div></div>);
};

export default Navbar;
