import React from "react";
import logo from "../assest/images/logo_big.png";
import whatsapp_icon from "../assest/images/whatsapp_icon.png";
import  pinter_icon from "../assest/images/pintester_icon.png";
import  instagram_icon from "../assest/images/instagram_icon.png";
function Footer() {
    return (
        <footer>
            <dir>
                <img src={logo} alt="" />
                <h1>SHOPER</h1>
                <ul className="information">
                    <li>Company</li>

                    <li>Product</li>
                    <li>Office</li>
                    <li>about</li>
                    <li>Contact</li>
                </ul>
                <div className="social-media">
                    <img src={whatsapp_icon} alt="" />
                    <img src={instagram_icon} alt="" />
                    <img src={pinter_icon} alt="" />
                </div>
                <p> copyright @2023 - All Rights Reserved</p>
            </dir>
        </footer>
    );
}

export default Footer;
