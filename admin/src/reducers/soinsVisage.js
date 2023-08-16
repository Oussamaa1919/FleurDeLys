import {
  UPDATE_SOINSVISAGE,
  SOINSVISAGE_ERROR
} from '../actions/types';

const initialState = {
  soinsvisage: null,
  loading: true,
  error: {}
};
function soinsVisageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_SOINSVISAGE:
      return {
        ...state,
        soinsvisage: payload,
        loading: false
      };
    
    case   SOINSVISAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        soinsvisage: null
      };
    
    default:
      return state;
  }
}

export default soinsVisageReducer;
