import {
  UPDATE_VIDEOACCUEIL,
  VIDEOACCUEIL_ERROR
} from '../actions/types';

const initialState = {
  videoaccueil: null,
  loading: true,
  error: {}
};
function videoAccueilReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_VIDEOACCUEIL:
      return {
        ...state,
        videoaccueil: payload,
        loading: false
      };
    
    case   VIDEOACCUEIL_ERROR
    :
      return {
        ...state,
        error: payload,
        loading: false,
        videoaccueil: null
      };
    
    default:
      return state;
  }
}

export default videoAccueilReducer;
