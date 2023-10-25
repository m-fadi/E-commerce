import "./Hero.css";
import hand_icon from "../assest/images/hand_icon.png"
import hero_image from "../assest/images/hero_image.png"
import arrow_icon from "../assest/images/arrow.png";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2> New Arrivals only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p> new</p>
                        <img src={hand_icon} alt=" hand icon" />
                    </div>
                    <p> collections</p>
                    <p> for everyone</p>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="" className="src" />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-img">
                    <img src={hero_image} alt=" " />
                </div>
            </div>
        </div>
    );
}

export default Hero;
