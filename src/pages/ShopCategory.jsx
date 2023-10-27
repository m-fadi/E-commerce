import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import all_products from "../components/assest/images/all_product";
import Item from "../components/Items/Item";
function ShopCategory(props) {
    // const { all_products } = useContext(ShopContext);
    const { specialOffer, category } = props;
    const filteredItems = all_products
        .filter((item) => {
            if (item.category === category) return item 
            else return null
        })
        .map((item) => <Item item={item} />);
    console.log({ filteredItems });
    return (
        <div>
            <div>
                <img src={specialOffer} alt="" />
            </div>
            <p>
                {" "}
                Showing 1 - {filteredItems.length} of {all_products.length}{" "}
            </p>
            <div className="filtered-items"> {filteredItems} </div>
        </div>
    );
}

export default ShopCategory;
