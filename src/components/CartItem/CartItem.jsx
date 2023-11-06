import React, { useContext, useEffect,useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItem.css";
//import remove_icon from "../";

function CartItem() {
    const { cartItems, all_products, remFromCart, addToCart } =
        useContext(ShopContext);
        const [inputValue, setInputValue] = useState(0);
    const handleChange = (id, e) => {
        e===0?  addToCart(id, 1):
        addToCart(id,Number( e.target.value));
    };
    useEffect(()=>{
        all_products.map((item) => {
            if (cartItems[item.id] !== 0)
             handleChange(item.id, 0)
        })
},[]) 

    let items = all_products.map((item) => {
        if (cartItems[item.id] === 0) return null;
        else
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
                                total : {item.new_price * cartItems[item.id]}{" "}
                                $ 
                            </div>
                        </div>
                        <div>
                            {/* <button onClick={() => addToCart(item.id)}>
                                {" "}
                                add item
                            </button> */}
                        </div>
                        <input
                            type="number"
                            min="1"
                            max="100"
                            onChange={(e) => handleChange(item.id, e)}
                        ></input>

                        <div className="total">
                            <p> </p>
                        </div>
                    </div>
                </div>
                // <div>
                //     {" "}
                //     <div className="cart-items-format">
                //         <img src={item.image} alt="" />
                //         <p> {item.name}</p>
                //         <p> price: {item.new_price} $</p>

                //         <p> Qty: {cartItems[item.id]}</p>
                //         <button onClick={() => addToCart(item.id)}>
                //             {" "}
                //             add item
                //         </button>
                //         <button onClick={() => remFromCart(item.id)}>
                //             remove item
                //         </button>
                //         {/* <input
                //             type="number"
                //             min="0"
                //             className="form-control"
                //             id="amountInput"

                //         ></input> */}
                //         <p className="cratItems-quantity">
                //             {" "}
                //             {item.new_price * cartItems[item.id]}
                //         </p>
                //         {/* <img src={remove_icon} alt="" /> */}
                //     </div>
                //     <hr />
                // </div>
            );
    });
    let sum = items.reduce((prev, curr) => prev + curr);
    console.log({ items });
    return (
        <div className="cart-container">
            <p className="cart-title"> Shopping Cart </p>
            <hr />
            {sum === 0 && (
                <div>
                    <p className="empty-cart">Your SHOPER Cart is empty.</p>
                </div>
            )}

            <div>{items}</div>
        </div>
    );
}

export default CartItem;
