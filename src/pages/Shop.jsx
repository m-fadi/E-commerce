import Hero from '../components/Hero/Hero'
import Popular from '../components/popular_items/Popular';
import Offer from '../components/Offers/Offer';
import NewCollections from '../components/New_collections/NewCollections';

function Shop() {
console.log(Hero)

  return <div className='container'>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
  </div>;
}

export default Shop