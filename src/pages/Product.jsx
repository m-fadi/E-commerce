import "./Css/Product.css";
import { useParams } from "react-router-dom";
import DisplayProduct from "../components/DisplayProduct/DisplayProduct";
import all_products from "../components/assest/images/all_product";
import { Link } from "react-router-dom";

import breadcrum_arrow from "../components/assest/images/breadcrum_arrow.png";
function Product() {
    const { productId } = useParams();
    console.log(useParams());
    const product = all_products.filter(
        (item) => item.id === Number(productId)
    );
    console.log(product);

    return (
        <div>
            <div className="location">
                HOME <img src={breadcrum_arrow} />{" "}
                <Link style={{ textDecoration: "none" }} to="/">
                    {" "}
                    Shop
                </Link>{" "}
                <img src={breadcrum_arrow} />{" "}
                <Link
                    style={{ textDecoration: "none" }}
                    to={`/${product[0].category}`}
                >
                    {" "}
                    {product[0].category.toLocaleUpperCase()}
                </Link>{" "}
                <img src={breadcrum_arrow} /> {product[0].name}
            </div>
            <DisplayProduct productId={productId} />
        </div>
    );
}

export default Product;
