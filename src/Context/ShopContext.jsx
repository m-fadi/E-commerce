import React, { createContext, useState } from "react";
import all_products from "../components/assest/images/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};
const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
        console.log({cartItems});

    const addToCart = (itemId,value) =>{
      
    setCartItems((prev) => ({ ...prev, [itemId]:  value  }));
    }
    const getItemsCount = (itemId,count) =>{
return  Object.values(cartItems).reduce((prev, curr) => prev + curr);
    }
    const removeProduct = (itemId) =>
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    const contextValue = {
        all_products,
        cartItems,
        addToCart,
        removeProduct,
        getItemsCount,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
