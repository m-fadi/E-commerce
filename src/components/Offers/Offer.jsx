import './Offer.css'
import exclusive_image from "../assest/images/exclusive_image.png" 

function Offer() {
  return (
    <div className='offer'>
        <div className="left-baner">
            <h1> Exclusive</h1>
            <h1> Offers for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <div className="check-now">Check Now</div>
        </div>
        <div className="right-banner">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offer