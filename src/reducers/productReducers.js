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


export default productReducer;