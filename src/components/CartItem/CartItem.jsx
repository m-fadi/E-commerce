import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
//import remove_icon from "../";

function CartItem() {
    const { cartItems, all_products, remFromCart, addToCart } =
        useContext(ShopContext);

    let items = all_products.map((item) => {
        if (cartItems[item.id] === 0) return null;
        else
            return (
                <div>
                    {" "}
                    <div className="cart-items-format">
                        <img src={item.image} alt="" />
                        <p> {item.name}</p>
                        <p> price: {item.new_price} $</p>

                        <p> {cartItems[item.id]}</p>
                        <button onClick={() => addToCart(item.id)}>
                            {" "}
                            add item
                        </button>
                        <button onClick={() => remFromCart(item.id)}>
                            remove item
                        </button>
                        {/* <input
                            type="number"
                            min="0"
                            className="form-control"
                            id="amountInput"
                            
                            
                        ></input> */}
                        <p className="cratItems-quantity">
                            {" "}
                            {item.new_price * cartItems[item.id]}
                        </p>
                        {/* <img src={remove_icon} alt="" /> */}
                    </div>
                    <hr />
                </div>
            );
    });

    let items = all_products.map((item) => {
        if (cartItems[item.id] === 0) return null;
        else
            return (
                <div>
                    <CartItem />
                </div>
            );
    }); 
    
}

export default CartItem;
