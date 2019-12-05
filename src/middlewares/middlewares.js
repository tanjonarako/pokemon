const middleware = store => next => action => {
  switch (action.type) {
    case 'updateList':
      return fetch(action.payload.request.url)
        .then(response => response.json())
        .then(response => {
          const successAction = {
            type: `${action.type}_SUCCESS`,
            payload: {
              list: response.results
            }
          }
          next(successAction)
        })
    case 'updateListItem':
      return fetch(action.payload.request.url)
        .then(response => response.json())
        .then(response => {
          const successAction = {
            type: `${action.type}_SUCCESS`,
            payload: {
              item: response
            }
          }
          next(successAction)
        })
    default:
      break
  }
  return next(action)
}

export default middleware
