import all_products from '../components/assest/images/all_product'

function Shop() {
let product=all_products.map(product=>{
    return`
    <div class="product"> 
    <div className="name"> hhhhhhhhhh${product.name}</div>

    </div>
    ` 
})

  return (
    <div>{product.name}</div>
  )
}

export default Shop