import _ from 'lodash';
//since we are importing from index.js we do not have to specify it
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // const post = action.payload.data;
      // //...state will return all the objects
      // const newState = { ...state, };
      // newState[post.id] = post;
      // return newState;
      //ES 6 version looks like:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
