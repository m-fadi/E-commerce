import React, { createContext,useState } from 'react'
import all_products from'../components/assest/images/all_product'


export const ShopContext = createContext(null)
const getDefaultCart= () => {
    let cart={}
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index]=0
        
    }
    return cart
}
const ShopContextProvider=(props)=>{
    console.log(all_products);
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const contextValue= { all_products, cartItems}
    const addToCart=(itemId)=>setCartItems(prev=>({...prev, [itemId]:prev[itemId]+1}))
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider 