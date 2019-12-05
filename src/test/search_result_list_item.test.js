import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchResultListItem from '../components/search_result_list_item';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchResultListItem', () => {
  let item, wrapper;
  beforeEach(() => {
    item = {trackId: 1, trackName: "Shape of you", artistName: "Ed Sheeran", artworkUrl60: "http://is1.mzstatic.com/image/thumb/Music122/v4/ef/ca/a4/efcaa44a-517a-98e3-2353-5bff15471ed5/source/60x60bb.jpg"};
    wrapper = shallow(<SearchResultListItem key={item.trackId} item={item}/>);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an item with props', () => {
    expect(wrapper.find('img').prop('src')).toEqual('http://is1.mzstatic.com/image/thumb/Music122/v4/ef/ca/a4/efcaa44a-517a-98e3-2353-5bff15471ed5/source/60x60bb.jpg');
    expect(wrapper.find('h2').text()).toEqual('Shape of you');
    expect(wrapper.find('span').text()).toEqual('Ed Sheeran');
  });
});
