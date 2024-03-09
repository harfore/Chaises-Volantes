import React from 'react'


function Product (props){
  return (
    
    <div className='card' >
        <img 
            className='product--image w-80 h-80 object-cover rounded-lg'
            src= {props.url}
            alt="product image"
        />
        <h2>{props.name}</h2>
        <p><button>Decouvre</button></p> 
    </div>

  )
}

export default Product;