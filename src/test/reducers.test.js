import reducer from '../reducers/reducers';

describe('listReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({'list': []});
  });

  it('should handle updateList_SUCCESS', () => {
    const list = ['Shape of you', 'Dive'];
    const updateAction = {
      type: 'updateList_SUCCESS',
      payload: {
        list: list
      }
    };
    expect(reducer({}, updateAction)).toEqual({"list": ["Shape of you", "Dive"]});
  });
});
