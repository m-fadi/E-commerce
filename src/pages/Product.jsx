import {useParams} from 'react-router-dom'
import all_products from '../components/assest/images/all_product'
function Product() {
  const {productId}= useParams()
  
  const product=all_products.filter(item => item.id === Number(productId))
  console.log(product[0])
  return (
    <div>
      <img src={product[0].image} alt="" />
    </div>
  )
}

export default Product