import {
  UPDATE_CAROUSSELACCEL,
  CAROUSSELACCEL_ERROR
} from '../actions/types';

const initialState = {
 carousselAccel: null,
  loading: true,
  error: {}
};
function carousselAccelReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case   UPDATE_CAROUSSELACCEL:
      return {
        ...state,
        carousselAccel: payload,
        loading: false
      };
    
    case   CAROUSSELACCEL_ERROR :
      return {
        ...state,
        error: payload,
        loading: false,
        carousselAccel: null
      };
    
    default:
      return state;
  }
}

export default carousselAccelReducer;
