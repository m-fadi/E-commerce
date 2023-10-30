import "./Item.css";
import { Link } from "react-router-dom";
function Item(props) {
    let { item } = props;
    
   
    return (
        <div className="item">
            <Link to={`/Product/${item.id}`}>
                <img src={item.image} alt="" />
            </Link>

            <p> {item.name}</p>
            <div className="item-price">
                <div className="item-price-old">{item.old_price} $</div>
                <div className="item-price-new">{item.new_price} $</div>
            </div>
        </div>
    );
}

export default Item;
