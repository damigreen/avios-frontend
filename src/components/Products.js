import React from 'react'


const Products = ({ products, removeProduct}) => {

  const productList = products.map((p, i) => (
    <ul>
      <li key={p.id}>Product {i} {p.size} {p.olor} {p.quantity} {p.price} {p._id}<button onClick>update</button>
      <button onClick={() => removeProduct(p._id)}>delete</button></li>
    </ul>
  ))
  

  return (
    <div>
      {productList}    
    </div>
  )
}

export default Products;
