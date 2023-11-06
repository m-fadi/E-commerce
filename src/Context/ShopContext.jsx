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
    
    const removeProduct = (itemId) =>
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    const contextValue = { all_products, cartItems, addToCart,removeProduct};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
