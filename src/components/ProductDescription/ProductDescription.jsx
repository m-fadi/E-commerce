import "./ProductDescription.css";
import React from "react";

function ProductDescription() {
    return (
        <div className="description-container">
            <div className="descriptionBox-navigator">
                <div className="description-title"> Description</div>
                <div className="description-title reviews-title"> Reviews (89)</div>
            </div>
            <div className="description">
                <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt quidem doloribus placeat explicabo eveniet eaque nihil
                    magnam? Cum alias autem accusamus adipisci rem repudiandae
                    qui corrupti nulla facilis? Libero earum dolorem placeat
                    ullam, deleniti a aliquid debitis eveniet animi vitae esse?
                    Quasi eveniet iste eius iusto reiciendis adipisci id
                    similique.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt explicabo quam corrupti facere maiores pariatur,
                    eaque ullam sapiente qui neque vero nobis, alias sint.
                    Molestias harum sequi eum voluptatum totam.
                </p>
            </div>
        </div>
    );
}

export default ProductDescription;
