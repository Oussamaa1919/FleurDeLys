import {
  UPDATE_CAROUSSELACCESSOIRES,
  CAROUSSELACCESSOIRES_ERROR
} from '../actions/types';

const initialState = {
 carousselaccessoires: null,
  loading: true,
  error: {}
};
function CarousselAccessoiresReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case   UPDATE_CAROUSSELACCESSOIRES:
      return {
        ...state,
        carousselaccessoires: payload,
        loading: false
      };
    
    case   CAROUSSELACCESSOIRES_ERROR :
      return {
        ...state,
        error: payload,
        loading: false,
        carousselaccessoires: null
      };
    
    default:
      return state;
  }
}

export default CarousselAccessoiresReducer;
