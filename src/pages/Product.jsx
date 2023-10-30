import {useParams} from 'react-router-dom'
import DisplayProduct from "../components/DisplayProduct/DisplayProduct";
import all_products from "../components/assest/images/all_product"

import breadcrum_arrow from '../components/assest/images/breadcrum_arrow.png'
function Product() {
  const {productId}= useParams()
  console.log(useParams())
  const product = all_products.filter((item) => item.id === Number(productId));
  console.log(product)
  
  return (
      <div>
          <div className="location">
              HOME <img src={breadcrum_arrow} /> SHOP{" "}
              <img src={breadcrum_arrow} />{" "}
              {product[0].category.toLocaleUpperCase()}{" "}
              <img src={breadcrum_arrow} /> {product[0].name}
          </div>
          <DisplayProduct productId={productId} />
      </div>
  );
}

export default Product