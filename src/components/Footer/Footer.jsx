import React from "react";
import "./Footer.css";
import logo from "../assest/images/logo.png";
import whatsapp_icon from "../assest/images/whatsapp_icon.png";
import pinter_icon from "../assest/images/pintester_icon.png";
import instagram_icon from "../assest/images/instagram_icon.png";
function Footer() {
    return (
        <footer>
            
                <div className="footer-logo">
                    <img src={logo} alt="" />
                    <h1>SHOPER</h1>
                </div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Product</li>
                    <li>Office</li>
                    <li>about</li>
                    <li>Contact</li>
                </ul>
                <div className="social-media-icons">
                    <div className="icon-container">
                        <img src={whatsapp_icon} alt="" />
                    </div>
                    <div className="icon-container">
                        <img src={instagram_icon} alt="" />
                    </div>
                    <div className="icon-container">
                        <img src={pinter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p> copyright @2023 - All Rights Reserved</p>
                </div>
            </footer>
       
    );
}

export default Footer;
