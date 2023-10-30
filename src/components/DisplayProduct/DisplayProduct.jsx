import all_products from "../assest/images/all_product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function DisplayProduct(props) {
    const product = all_products.filter(
        (item) => item.id === Number(props.productId)
    );
    return (
        <div className="container">
            
            <div className="left-side">

                <img src={product[0].image} alt="" />
            </div>
        </div>
    );
}

export default DisplayProduct
