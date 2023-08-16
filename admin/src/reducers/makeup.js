import {
  UPDATE_MAKEUP,
  MAKEUP_ERROR
} from '../actions/types';

const initialState = {
 makeup: null,
  loading: true,
  error: {}
};
function makeupReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_MAKEUP:
      return {
        ...state,
        makeup: payload,
        loading: false
      };
    
    case   MAKEUP_ERROR
    :
      return {
        ...state,
        error: payload,
        loading: false,
        makeup: null
      };
    
    default:
      return state;
  }
}

export default makeupReducer;
