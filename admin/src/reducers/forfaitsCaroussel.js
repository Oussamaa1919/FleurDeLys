import {
  UPDATE_FORFAITSCAROUSSEL,
  FORFAITSCAROUSSEL_ERROR
} from '../actions/types';

const initialState = {
  forfaitscaroussel: null,
  loading: true,
  error: {}
};
function forfaitsCarousselReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case   UPDATE_FORFAITSCAROUSSEL:
      return {
        ...state,
        forfaitscaroussel: payload,
        loading: false
      };
    
    case   FORFAITSCAROUSSEL_ERROR :
      return {
        ...state,
        error: payload,
        loading: false,
        forfaitscaroussel: null
      };
    
    default:
      return state;
  }
}

export default forfaitsCarousselReducer;
