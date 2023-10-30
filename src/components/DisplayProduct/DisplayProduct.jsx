import all_products from "../assest/images/all_product";

function DisplayProduct(props) {
    const product = all_products.filter(
        (item) => item.id === Number(props.productId)
    );
    return (
        <div>
            <img src={product[0].image} alt="" />
        </div>
    );
}

export default DisplayProduct;
