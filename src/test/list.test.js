import React from 'react'
import { Provider } from 'react-redux'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { List } from '../components/list'
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

describe('List', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<List />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list', () => {
    const list = ['abc', 'def']
    const wrapper = shallow(<Provider store={store}><List /></Provider>)
    console.log('wrapper', wrapper.find('Item'))
    expect(wrapper.find('Item').length).toEqual(2)
  })
})
