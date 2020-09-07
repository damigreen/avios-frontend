import productService from '../services/product'

const productReducer = (state=[], action) => {
  console.log(`action, ${action.data}`)

  switch(action.type) {
    case 'INIT_PRODUCTS':
    return action.data

    case 'REMOVE_PRODUCT':{
      const id = action.data
      return state.filter(b => b.id !== id)
    }    

    case 'UPDATE_PRODUCT': {
      const updatedProduct = action.data
      const id = updatedProduct.id
      return state.map(b => b.id !== id ? b : updatedProduct)
    }
  

    default:
      return state

  }
}

export const initialProducts = () => {
  return dispatch => {
    productService.getAll()
      .then(products => dispatch({
        type: 'INIT_PRODUCTS',
        data: products
      }))
  }
}

export const removeProduct = id => {
  return dispatch => {
    console.log(id)
    productService.del(id)
      .then(() => {
        dispatch({
          type: 'REMOVE_PRODUCT',
          data: id
        })
      })
  }
}

export const updateProduct = blog => {
  return dispatch => {
    productService.update(blog.id, blog)
      .then(updatedProduct => dispatch({
        type: 'UPDATE_PRODUCT',
        data: updatedProduct
      }))
  }
}


export default productReducer;