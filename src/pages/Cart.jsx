import React, { useContext } from "react";
import "./Css/Cart.css";
//import { ShopContext } from "../Context/ShopContext";

import CartItem from "../components/CartItem/CartItem";

function Cart() {
    //const { cartItems, all_products } = useContext(ShopContext);

   

    
    return (
        <div>
            <CartItem/>
        </div>
    );
}

export default Cart;
