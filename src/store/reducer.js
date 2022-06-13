import * as actions from './actionTypes';
import users from '../mocks/users.json'

const initialState = {
  users
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}
