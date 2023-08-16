import {
  UPDATE_CAROUSSELHAIR,
  CAROUSSELHAIR_ERROR
} from '../actions/types';

const initialState = {
 carousselhair: null,
  loading: true,
  error: {}
};
function CarousselHairReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case   UPDATE_CAROUSSELHAIR:
      return {
        ...state,
        carousselhair: payload,
        loading: false
      };
    
    case   CAROUSSELHAIR_ERROR :
      return {
        ...state,
        error: payload,
        loading: false,
        carousselhair: null
      };
    
    default:
      return state;
  }
}

export default CarousselHairReducer;
