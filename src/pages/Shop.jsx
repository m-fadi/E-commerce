import Hero from '../components/Hero/Hero'
import Popular from '../components/popular_items/Popular';
import Offer from '../components/Offers/Offer';

function Shop() {
console.log(Hero)

  return <div>
    <Hero/>
    <Popular/>
    <Offer/>
  </div>;
}

export default Shop