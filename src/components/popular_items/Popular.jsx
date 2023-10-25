import popular_items from "../assest/images/data.js";
import "./Popular.css";
import Item from "../Items/Item.jsx";
import React from "react";

function Popular() {
    let popularItems = popular_items.map((item) => {
        return <Item key={item.id} id={item.id} item={item} />;
    });
    return <div className="popular">
        <h1> Popular Women's items</h1>
        <hr/>
        <div className="popular-item">
            {popularItems}
        </div>
    </div>;
}

export default Popular;
