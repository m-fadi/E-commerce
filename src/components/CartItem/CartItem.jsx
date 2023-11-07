import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItem.css";
//import remove_icon from "../";

function CartItem() {
    let itemsPriceArray = [0];
    const { cartItems, all_products, removeProduct, addToCart } =
        useContext(ShopContext);
    
    const handleChange = (id, e) => {
        e === 0 ? addToCart(id, 1) : addToCart(id, Number(e.target.value));
    };
    useEffect(() => {
        all_products.map((item) => {
            if (cartItems[item.id] !== 0) handleChange(item.id, 0);
        });
    }, []);

    let items = all_products.map((item) => {
        if (cartItems[item.id] === 0) return null;
        else {
            itemsPriceArray = [
                ...itemsPriceArray,
                item.new_price * cartItems[item.id],
            ];

            return (
                <div>
                    <div className="cart-items-format">
                        <div className="cart-item-details">
                            {" "}
                            <img src={item.image} alt="" />
                            <div className="qus">
                                <p> {item.name}</p>
                                <p className="cratItems-quantity">
                                    price per Stk. {item.new_price} $
                                </p>
                                total : {item.new_price * cartItems[item.id]} $
                            </div>
                        </div>

                        <input
                            type="number"
                            min="1"
                           
                            max="100"
                            onChange={(e) => handleChange(item.id, e)}
                        ></input>

                        <button
                            className="removeProduct-btn"
                            onClick={() => removeProduct(item.id)}
                        >
                            {" "}
                            Remove product
                        </button>
                    </div>
                </div>
            );
        }
    });
    let sum = items.reduce((prev, curr) => prev + curr);
    console.log({ items });
    return (
        <div className="cart-container">
            <div className="productAndPrices">
                <p className="cart-title"> Shopping Cart </p>
                <hr />
                {sum === 0 && (
                    <div>
                        <p className="empty-cart">Your SHOPER Cart is empty.</p>
                    </div>
                )}
                <div>{items}</div>
                <hr />
                <div className="cart-total">
                    <p>
                        {" "}
                        Total Price:{" "}
                        {itemsPriceArray.reduce((prev, curr) => prev + curr)} $
                    </p>
                </div>
            </div>
            {itemsPriceArray.length > 1 && (
                <div className="cart-checkOut">
                    <p>
                        {" "}
                        Total Price:{" "}
                        {itemsPriceArray.reduce((prev, curr) => prev + curr)} $
                    </p>
                    <button className="cart-checkOut-btn"> Check Out</button>
                </div>
            )}
        </div>
    );
}

export default CartItem;
