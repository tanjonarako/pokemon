import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Item } from '../components/item'

configure({ adapter: new Adapter() })

describe('Item', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Item />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render an item with props', () => {
    const item = {'name': 'abc'}
    const wrapper = shallow(<Item item={item} />)
    expect(wrapper).toMatchSnapshot()
  })
})
