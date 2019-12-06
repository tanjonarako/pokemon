import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheet/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import { Provider } from 'react-redux'
import App from './components/app'
import { createStore, applyMiddleware } from 'redux'
import todoAppReducers from './reducers/reducers'
import todoMiddlewares from './middlewares/middlewares'

const initialState = {
  pokemonList: {
    byIds: {},
    ids: [],
    pagination: {
      next: '',
      previous: ''
    }
  },
  favourites: []
}

const store = createStore(todoAppReducers, initialState, applyMiddleware(todoMiddlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
