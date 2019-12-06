import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
