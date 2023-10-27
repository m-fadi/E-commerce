import new_collections from '../assest/images/new_collections'
import "./NewCollections.css"
import Item from "../Items/Item"
function NewCollections() {
    let newCollections = new_collections.map(item=>{
        return <div> <Item key={item.id} item={item}/></div>
    })
  return (
      <div className="new-collections">
          <h1> NEW COLLECTIONS</h1>
          <hr />
          <div className="new-collections-item"> {newCollections}</div>
      </div>
  );
}

export default NewCollections