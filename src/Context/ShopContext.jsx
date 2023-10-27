import React, { createContext } from 'react'
import all_products from'../components/assest/images/all_product'


export const ShopContext = createContext(null)
const ShopContextProvider=(props)=>{
    const contextValue= { all_products}
    console.log({all_products})
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider 