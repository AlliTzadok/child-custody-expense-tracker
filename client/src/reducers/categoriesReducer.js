export default (state=[], action) => {

  switch(action.type) {

    case 'LOADING_CATEGORIES':
      return state

    case 'FETCH_CATEGORIES':
      return action.payload

    case 'ADD_CATEGORY':
      return action.payload


    default:
      return state;
  }
}
