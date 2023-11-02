import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/Items/Item'
function Cart() {
  const {cartItems, all_products, remFromCart} = useContext(ShopContext)
  let items=all_products.map(item => {
    if (cartItems[item.id] === 0) return null;
    else return <Item item={item} key={item.id} />;

    
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