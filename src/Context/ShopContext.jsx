import React, { createContext, useState } from "react";
import all_products from "../components/assest/images/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    console.log(cart)
    return cart;
};
const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId,value) =>{
      console.log(itemId,value)
    setCartItems((prev) => ({ ...prev, [itemId]: value  }));
    }
    
    const remFromCart = (itemId) =>
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const contextValue = { all_products, cartItems, addToCart,remFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
