import { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../assest/images/logo.png";
import cart_icon from "../assest/images/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
function Navbar() {
    const [menu, setMenu] = useState("shop");
    const { cartItems } = useContext(ShopContext);
    console.log('OB:CO',Object.values(cartItems));
    let sum = Object.values(cartItems).reduce((prev, curr) => prev + curr);
console.log(Number(sum))
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: "none" }} to="/">
                        {" "}
                        Shop
                    </Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link style={{ textDecoration: "none" }} to="/women">
                        {" "}
                        Women
                    </Link>
                    {menu === "women" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("men")}>
                    <Link style={{ textDecoration: "none" }} to="/men">
                        {" "}
                        Men
                    </Link>
                    {menu === "men" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link style={{ textDecoration: "none" }} to="/kids">
                        {" "}
                        kids
                    </Link>{" "}
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{ textDecoration: "none" }} to="/login">
                    <button>Login</button>
                </Link>

                <Link style={{ textDecoration: "none" }} to="/cart">
                    <img src={cart_icon} alt=" cart icon" />{" "}
                </Link>
                <div className="nav-cart-count">{sum}</div>
            </div>
        </div>
    );
}
export default Navbar;
