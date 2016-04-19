import { DEFAULT_ACTION } from '../constants/ActionTypes';

const initialState = {
 text: "Default state" 
};

export default function notes(state = initialState, action) {
  switch(action.type) {
    case DEFAULT_ACTION:
      return {
        text: "Updated state!",
        ...state
      }
    default:
      return state;
  }
};