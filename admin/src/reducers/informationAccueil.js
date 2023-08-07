import {
  UPDATE_INFORMATIONACCUEIL,
  INFORMATIONACCUEIL_ERROR
} from '../actions/types';

const initialState = {
  informationaccueil: null,
  loading: true,
  error: {}
};
function informationAccueilReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_INFORMATIONACCUEIL:
      return {
        ...state,
        informationaccueil: payload,
        loading: false
      };
    
    case   INFORMATIONACCUEIL_ERROR
    :
      return {
        ...state,
        error: payload,
        loading: false,
        informationaccueil: null
      };
    
    default:
      return state;
  }
}

export default informationAccueilReducer;
