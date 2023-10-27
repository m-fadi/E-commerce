import React from 'react'

function ShopCategory(props) {
  console.log(props)
  return (
    <div >
      <img src={props.specialOffer} alt="" />
    </div>
  )
}

export default ShopCategory