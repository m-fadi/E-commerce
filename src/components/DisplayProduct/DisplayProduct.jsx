import "./DisplayProduct.css";
import all_products from "../assest/images/all_product";
import star_icon from "../assest/images/star_icon.png";
import star_dull_icon from "../assest/images/star_dull_icon.png";
import {Link} from 'react-router-dom'
function DisplayProduct(props) {
    
    const { product } = props;
const addToCart=()=>{
    <Link to="/cart"></Link>
}
    return (
        <div className="product-container">
            <div className="left-side">
                <div className="img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-img-main">
                    <img className="main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="right-side">
                <h1> {product.name}</h1>
                <div className="rating-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(13)</p>
                </div>
                <div className="prices">
                    <div className="price-old">{product.old_price} $</div>
                    <div className="price-new">{product.new_price} $</div>
                </div>
                <div className="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero vitae minima reprehenderit ab sit facilis neque odio
                    possimus temporibus obcaecati!
                </div>
                <div className="product-size">
                    <h1> Select Size</h1>
                    <div className="sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={addToCart} className="add-cart-btn">ADD TO CART</button>
                </div>
            </div>
            
        </div>
    );
}

export default DisplayProduct;
