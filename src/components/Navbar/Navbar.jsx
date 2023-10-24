import { useState } from "react";
import "./Navbar.css";
import logo from "../assest/images/logo.png";
import cart_icon from "../assest/images/cart_icon.png";

function Navbar() {
    const [menu,setMenu]=useState("shop")

   

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setMenu("shop")}>
                    Women{menu === "shop"? <hr /> : <></>}
                </li>
                <li onClick={()=>setMenu("women")}>
                    Women{menu === "women"? <hr /> : <></>}
                </li>
                <li onClick={()=>setMenu("men")}>
                    Kids{menu === "men"? <hr /> : <></>}
                </li>
                <li onClick={()=>setMenu("kids")}>
                    Men{menu === "kids"? <hr /> : <></>}
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
