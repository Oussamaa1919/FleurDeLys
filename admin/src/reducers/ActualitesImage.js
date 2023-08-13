import {
  UPDATE_IMAGEACTUALITES,
  IMAGEACTUALITES_ERROR
} from '../actions/types';

const initialState = {
  actualitesimage: null,
  loading: true,
  error: {}
};
function ActualitesImageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_IMAGEACTUALITES:
      return {
        ...state,
        actualitesimage: payload,
        loading: false
      };
    
    case   IMAGEACTUALITES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        actualitesimage: null
      };
    
    default:
      return state;
  }
}

export default ActualitesImageReducer;
