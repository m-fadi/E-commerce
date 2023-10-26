import './Offer.css'
import exclusive_image from "../assest/images/exclusive_image.png" 
import arrow_icon from "../assest/images/arrow.png";

function Offer() {
  return (
      <div className="offer">
          <div className="offer-left">
              <h1> Exclusive</h1>
              <h1> Offers for You</h1>
              <p>ONLY ON BEST SELLERS PRODUCTS</p>
              <div className="check-now-btn">
                  <div>Check Now</div>
                  <img src={arrow_icon} alt="" />
              </div>
          </div>
          <div className="offer-right">
              <img src={exclusive_image} alt="" />
          </div>
      </div>
  );
}

export default Offer