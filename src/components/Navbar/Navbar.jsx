import React from "react";
import "./Navbar.css";
import logo from "../assest/images/logo.png"
import cart_icon from "../assest/images/cart_icon.png"
function Navbar() {
    return <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
    </div>;
}

export default Navbar;
