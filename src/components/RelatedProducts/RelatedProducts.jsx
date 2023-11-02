import "./RelatedProducts.css";
import data from "../assest/images/data";
import Item from "../Items/Item";

function RelatedProducts() {
    const relatedData = data.map((item) => {
        return (
            <div>
                {" "}
                <Item key={item.id} item={item} />
            </div>
        );
    });
    return (
        <div className="related-products-container">
            <h1> RELATED PRODUCTS</h1>
            <hr />
            <div className="related-products"> {relatedData}</div>
        </div>
    );
}

export default RelatedProducts;
