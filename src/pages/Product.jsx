import {useParams} from 'react-router-dom'
import DisplayProduct from "../components/DisplayProduct/DisplayProduct";
function Product() {
  const {productId}= useParams()
  console.log(useParams())
  
  
  return (
      <div>
          <DisplayProduct productId={productId}/>
      </div>
  );
}

export default Product