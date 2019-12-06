import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { List } from '../components/list'

configure({ adapter: new Adapter() })

describe('List', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<List />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list', () => {
    const list = ['abc', 'def']
    const wrapper = shallow(<List list={list} />)
    expect(wrapper).toMatchSnapshot()
  })
})
