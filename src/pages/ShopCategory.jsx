
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import all_products from "../components/assest/images/all_product";
import Item from "../components/Items/Item";
import { useContext } from "react";


function ShopCategory(props) {
    const pro=useContext( ShopContext);
    console.log(pro);
    const { specialOffer, category } = props;
    const filteredItems = all_products
        .filter((item) => {
            if (item.category === category) return item;
            else return null;
        })
        .map((item) => (
             
                <Item item={item} key={item.id} />
            
        ));
    
    return (
        <div className="shop-container">
            <div className="shop-offer-banner">
                <img src={specialOffer} alt="" />
            </div>
            <div className="shop-count">
                {" "}
                <p>
                    Showing 1 - {filteredItems.length} of {filteredItems.length}{" "}
                </p>
            </div>
            <div className="filtered">
                <div className="filtered-items"> {filteredItems} </div>
            </div>
        </div>
    );
}

export default ShopCategory;
