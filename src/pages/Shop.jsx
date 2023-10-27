import Hero from '../components/Hero/Hero'
import Popular from '../components/popular_items/Popular';
import Offer from '../components/Offers/Offer';
import NewCollections from '../components/New_collections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';


function Shop() {


  return <div >
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
    
  </div>;
}

export default Shop