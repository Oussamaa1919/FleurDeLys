import {
  UPDATE_SOINSCHEVEUX,
 SOINSCHEVEUX_ERROR
} from '../actions/types';

const initialState = {
  soinscheveux: null,
  loading: true,
  error: {}
};
function soinsCheveuxReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_SOINSCHEVEUX:
      return {
        ...state,
        soinscheveux: payload,
        loading: false
      };
    
    case   SOINSCHEVEUX_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        soinscheveux: null
      };
    
    default:
      return state;
  }
}

export default soinsCheveuxReducer;
