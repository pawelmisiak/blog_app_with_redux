//since we are importing from index.js we do not have to specify it
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
