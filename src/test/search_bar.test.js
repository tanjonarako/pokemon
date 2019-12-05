import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchBar } from '../components/search_bar';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<SearchBar/>);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state on change of the input', () => {
    wrapper.find('input').simulate('change', 
      {target: { value: 'Ed Sheeran' }
    });

    expect(wrapper.state().value).toEqual('Ed Sheeran');
  });

  it('should call doSearch on submit', () => {
    const doSearch = jest.fn();
    const wrapper2 = shallow(<SearchBar doSearch={doSearch}/>);
    wrapper2.setState({ value: 'Ed Sheeran' });
    wrapper2.find('a').simulate('click');

    expect(doSearch).toBeCalledWith('Ed Sheeran');
  });
});
