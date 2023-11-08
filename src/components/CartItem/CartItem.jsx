import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItem.css";
import remove_icon from "../assest/images/cart_cross_icon.png";

function CartItem() {
    let totalPrice=0
    let itemsPriceArray = [0];
    const { cartItems, all_products, removeProduct, addToCart } =
        useContext(ShopContext);

    const handleChange = (id, e) => {
        e === 0 ? addToCart(id, 1) : addToCart(id, Number(e.target.value));
    };
    

    let items = all_products.map((item) => {
       
        if (cartItems[item.id] === 0) return null;
        else {
            itemsPriceArray = [
                ...itemsPriceArray,
                item.new_price * cartItems[item.id],
            ];
            totalPrice= itemsPriceArray.reduce((prev, curr) => prev + curr);
            return (
                <div>
                    <div className="cartItems-format cartItems-format-main">
                        <img
                            src={item.image}
                            alt=""
                            className="cartIcon-product-icon"
                        />
                        <p> {item.name}</p>
                        <p>{item.new_price} $</p>
                        <input
                            type="number"
                            min="1"
                            max="100"
                            value={cartItems[item.id]}
                            onChange={(e) => handleChange(item.id, e)}
                        ></input>
                        <p>Price: {item.new_price * cartItems[item.id]} $ </p>
                        <img
                            src={remove_icon}
                            className="cart-removeItem"
                            onClick={() => removeProduct(item.id)}
                            alt=""
                        />
                    </div>
                    <hr />

                </div>
            );
            // return (
            //     <div>
            //         <div className="cart-items-format">
            //             <div className="cart-item-details">
            //                 {" "}
            //                 <img src={item.image} alt="" />
            //                 <div className="qus">
            //                     <p> {item.name}</p>
            //                     <p className="cratItems-quantity">
            //                         price per Stk. {item.new_price} $
            //                     </p>
            //                     total : {item.new_price * cartItems[item.id]} $
            //                 </div>
            //             </div>

            //             <input
            //                 type="number"
            //                 min="1"

            //                 max="100"
            //                 onChange={(e) => handleChange(item.id, e)}
            //             ></input>

            //             <button
            //                 className="removeProduct-btn"
            //                 onClick={() => removeProduct(item.id)}
            //             >
            //                 {" "}
            //                 Remove product
            //             </button>
            //         </div>
            //     </div>
            // );
        }
    });
    let sum = items.reduce((prev, curr) => prev + curr);
    console.log({ items });
    return (
        // <div className="cart-container">
        //     <div className="productAndPrices">
        //         <p className="cart-title"> Shopping Cart </p>
        //         <hr />
        //         {sum === 0 && (
        //             <div>
        //                 <p className="empty-cart">Your SHOPER Cart is empty.</p>
        //             </div>
        //         )}
        //         <div>{items}</div>
        //         <hr />
        //         <div className="cart-total">
        //             <p>
        //                 {" "}
        //                 Total Price:{" "}
        //                 {itemsPriceArray.reduce((prev, curr) => prev + curr)} $
        //             </p>
        //         </div>
        //     </div>
        //     {itemsPriceArray.length > 1 && (
        //         <div className="cart-checkOut">
        //             <p>
        //                 {" "}
        //                 Total Price:{" "}
        //                 {itemsPriceArray.reduce((prev, curr) => prev + curr)} $
        //             </p>
        //             <button className="cart-checkOut-btn"> Check Out</button>
        //         </div>
        //     )}
        // </div>
        <div className="cartItems">
            {sum !== 0 && (
                <div>
                    <div className="cartItems-format-main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Qty</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    <div>{items}</div>
                    <div className="cartItems-down">
                        <div className="cart-total">
                            <h2> Total Price: {totalPrice} $ </h2>
                            <div>
                                <div className="cart-total-price">
                                    <p>Subtotal</p>
                                    <p> {totalPrice} $ </p>
                                </div>
                                <hr />
                                <div className="cart-total-price">
                                    <p>Shipping Fee</p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className="cart-total-price">
                                    <h3>Total cost</h3>
                                    <h3>{0}$</h3>
                                </div>
                            </div>
                            <button> Proceed to checkout</button>
                        </div>
                        <div className="cart-promoCode">
                            <p>if you have a promo code, please enter it</p>
                            <div className="cart-promo-box">
                                <input type="text" placeholder="promo code" />
                                <button> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartItem;
