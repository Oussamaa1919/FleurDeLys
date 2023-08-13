import {
  UPDATE_ACTUALITES,
  ACTUALITES_ERROR
} from '../actions/types';

const initialState = {
  actualites: null,
  loading: true,
  error: {}
};
function actualitesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_ACTUALITES:
      return {
        ...state,
        actualites: payload,
        loading: false
      };
    
    case   ACTUALITES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        actualites: null
      };
    
    default:
      return state;
  }
}

export default actualitesReducer;
