import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import { initialProducts } from './reducers/productReducers'
import { removeProduct } from './reducers/productReducers'
import { updateProduct } from './reducers/productReducers'

function App(props) {
  const products = props.products;

  useEffect(() => {
    props.initialProducts()
  }, [props])

  const removeProduct = async (id) => {
    if (window.confirm(`remove product`)) {
      await props.removeProduct(id)
    }
  };

  
  const updateProduct = async (event) => {
    const newProduct = {
      size: 23,
      color: 'Black',
      quantity: 90,
      images: ['image10', 'image45'],
      price: 40000
    }
    const updateProduct = { ...products };
    props.updateProduct(newProduct)
  };


  const productList = products.map((p, i) => (
    <ul>
      <li key={p.id}>Product {i} {p.size} {p.olor} {p.quantity} {p.price} <button onClick>update</button>
      <button onClick={() => removeProduct(p._id)}>delete</button></li>
    </ul>
  ))
  
  console.log(products)
  return (
    <div className="App">
      <h1>Avios Home</h1>
      {productList}
    </div>
  );
}



const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = {
  initialProducts,
  removeProduct,
  updateProduct,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
