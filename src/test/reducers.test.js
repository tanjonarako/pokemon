import reducer from '../reducers/reducers'

describe('listReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      'pokemonList': {
        'byIds': {},
        'ids': [],
        'pagination': {
          'next': '',
          'previous': ''
        }
      },
      'favourites': []
    })
  })

  it('should handle updateList_SUCCESS', () => {
    const pokemonList = [
      { 'name': 'id1' },
      { 'name': 'id2' }
    ]
    const updateAction = {
      type: 'updateList_SUCCESS',
      payload: {
        list: pokemonList,
        pagination: {
          next: '',
          previous: ''
        }
      }
    }
    expect(reducer({}, updateAction)).toEqual({
      'pokemonList': {
        'byIds': {
          'id1': { 'name': 'id1' },
          'id2': { 'name': 'id2' }
        },
        'ids': ['id1', 'id2'],
        'pagination': {
          'next': '',
          'previous': ''
        }
      },
      'favourites': []
    })
  })
})
