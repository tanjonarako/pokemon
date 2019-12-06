import React from 'react'
import { Provider } from 'react-redux'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Item from '../components/item'
import { createStore, applyMiddleware } from 'redux'
import todoAppReducers from '../reducers/reducers'
import todoMiddlewares from '../middlewares/middlewares'

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

Enzyme.configure({ adapter: new Adapter() })

describe('Item', () => {
  let item, wrapper
  beforeEach(() => {
    item = {'name': 'abc'}
    wrapper = shallow(<Provider store={store}><Item key={item} item={item} /></Provider>)
  })
  it('should render correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('should render an item with props', () => {
    console.log('aaaaa', wrapper.find('h2'))
    expect(wrapper.find('h2').text()).toEqual('abc')
  })
})
