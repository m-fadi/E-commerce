import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../components/assest/images/cart_cross_icon.png'
function Cart() {
  const {cartItems, all_products, remFromCart} = useContext(ShopContext)
  let items=all_products.map(item => {
    if (cartItems[item.id] === 0) return null;
    else return (
        <div>
            <div className="cart-items-format">
                
                <img src={item.image} alt="" />
                <p> {item.name}</p>
                <p> price: {item.new_price} $</p>
                <button className='cratItems-quantity'>{cartItems[item.id]}</button>
                <p></p>
                <img src={remove_icon} alt="" />
                   
                </div>
                <hr/>
            </div>
        
    );

    
  })
  let sum = items.reduce((prev,curr) =>prev+curr);
  return (
    <div>
     {sum===0 && <p className="empty-cart">There is no Items in the Cart</p>}
    <div>{items}</div>
    </div>
  )
}

export default Cart