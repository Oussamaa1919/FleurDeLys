import {
  ADD_COLORATION,
  COLORATION_ERROR
} from '../actions/types';

const initialState = {
  coloration: null,
  loading: true,
  error: {}
};
function colorationReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case ADD_COLORATION:
      return {
        ...state,
        coloration: payload,
        loading: false
      };
    
    case   COLORATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        coloration: null
      };
    
    default:
      return state;
  }
}

export default colorationReducer;
