import React, { Component } from 'react'
import List from './list'
import Favourite from './favourite'
import '../stylesheet/app.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Favourite />
        <List />
      </div>
    )
  }
}

export default App
