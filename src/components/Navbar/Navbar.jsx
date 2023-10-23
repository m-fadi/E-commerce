import React from "react";
import "./Navbar.css";
import logo from "../assest/images/logo.png";
import cart_icon from "../assest/images/cart_icon.png";

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPER</p>
            </div>
            <ul className="nav-menu">
                <li>
                    Shop
                    <hr/>
                </li>
                <li>
                    Men
                    
                </li>
                <li>
                    Women 
                </li>
                <li>
                    Kids
                    
                </li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt=" cart icon" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
