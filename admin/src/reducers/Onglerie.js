import {
  UPDATE_ONGLERIE,
  ONGLERIE_ERROR
} from '../actions/types';

const initialState = {
  onglerie: null,
  loading: true,
  error: {}
};
function OnglerieReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_ONGLERIE:
      return {
        ...state,
        onglerie: payload,
        loading: false
      };
    
    case   ONGLERIE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        onglerie: null
      };
    
    default:
      return state;
  }
}

export default OnglerieReducer;
