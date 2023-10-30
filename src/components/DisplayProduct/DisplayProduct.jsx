import all_products from "../assest/images/all_product";

function DisplayProduct(props) {
    const {product }= props
    
    return (
        <div className="container">
            <div className="left-side">
                <div className="img-list">
                    <img src={product[0].image} alt="" />
                    <img src={product[0].image} alt="" />
                    <img src={product[0].image} alt="" />
                    <img src={product[0].image} alt="" />
                </div>
                <div className="display-img">
                    <img className="main-img" src={product[0].image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default DisplayProduct
