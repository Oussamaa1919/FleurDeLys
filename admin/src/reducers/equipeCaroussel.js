import {
  UPDATE_EQUIPECAROUSSEL,
  EQUIPECAROUSSEL_ERROR
} from '../actions/types';

const initialState = {
  equipecaroussel: null,
  loading: true,
  error: {}
};
function equipeCarousselReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case   UPDATE_EQUIPECAROUSSEL:
      return {
        ...state,
        equipecaroussel: payload,
        loading: false
      };
    
    case   EQUIPECAROUSSEL_ERROR :
      return {
        ...state,
        error: payload,
        loading: false,
        equipecaroussel: null
      };
    
    default:
      return state;
  }
}

export default equipeCarousselReducer;
