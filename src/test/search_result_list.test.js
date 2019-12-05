import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchResultList } from '../components/search_result_list';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchResultList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SearchResultList/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list', () => {
    const list = [{trackId: 1, name: "Shape of you"}, {trackId: 2, name: "Dive"}];
    const wrapper = shallow(<SearchResultList list={ list }/>);
    expect(wrapper.find('SearchResultListItem').length).toEqual(2);
  }); 
});
