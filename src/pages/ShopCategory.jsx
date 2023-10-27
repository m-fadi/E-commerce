import React, { useContext } from 'react'
import  {ShopContext} from '../Context/ShopContext'
import all_products from "../components/assest/images/all_product";

function ShopCategory(props) {
 // const { all_products } = useContext(ShopContext);
  const {specialOffer, category} = props
  const filteredItems=all_products.filter(item=>{
if (item.category===category ) return item
  })
  console.log({filteredItems})
  return (
      <div>
          <div>
              <img src={specialOffer} alt="" />
          </div>
          <p> Showing 1 - {filteredItems.length} of {all_products.length} </p>
      </div>
  );
}

export default ShopCategory