import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import productReducer from './reducers/productReducers'

const reducer = combineReducers({
  products: productReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
