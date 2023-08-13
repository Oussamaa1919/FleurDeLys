import {
  UPDATE_CAROUSSELMIMI,
  CAROUSSELMIMI_ERROR
} from '../actions/types';

const initialState = {
  carousselmimi: null,
  loading: true,
  error: {}
};
function carousselMimiReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case   UPDATE_CAROUSSELMIMI:
      return {
        ...state,
        carousselmimi: payload,
        loading: false
      };
    
    case   CAROUSSELMIMI_ERROR :
      return {
        ...state,
        error: payload,
        loading: false,
        carousselmimi: null
      };
    
    default:
      return state;
  }
}

export default carousselMimiReducer;
