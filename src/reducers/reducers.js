import { combineReducers } from 'redux'

const listReducer = (state = {}, action) => {
  if (action.type === 'updateList_SUCCESS') {
    return action.payload.list.reduce(
      (all, item) => {
        const { name } = item
        const { byIds, ids } = all

        // update store
        return {
          byIds: {
            ...byIds,
            [name]: { name }
          },
          ids: [...ids, name]
        }
      },
      {
        byIds: {},
        ids: []
      }
    )
  }

  if (action.type === 'updateListItem_SUCCESS') {
    return {
      byIds: {...state.byIds,
        [action.payload.item.name]: action.payload.item},
      ids: state.ids
    }
  }

  return state
}

const favReducer = (state = [], action) => {
  if (action.type === 'addToFav') {
    localStorage['id'] = JSON.stringify(state)
    const index = state.indexOf(action.data)
    return index < 0 ? [...state, action.data] : state
  }

  if (action.type === 'getFav') {
    var storedId = localStorage['id'] && JSON.parse(localStorage['id'])
    return storedId ? [...state, ...storedId] : state
  }
  return state
}

export default combineReducers({
  pokemonList: listReducer,
  favourites: favReducer
})
