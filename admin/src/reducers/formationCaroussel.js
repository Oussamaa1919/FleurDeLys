import {
  UPDATE_FORMATIONCAROUSSEL,
  FORMATIONCAROUSSEL_ERROR
} from '../actions/types';

const initialState = {
  formationcaroussel: null,
  loading: true,
  error: {}
};
function formationCarousselReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case   UPDATE_FORMATIONCAROUSSEL:
      return {
        ...state,
        formationcaroussel: payload,
        loading: false
      };
    
    case   FORMATIONCAROUSSEL_ERROR :
      return {
        ...state,
        error: payload,
        loading: false,
        formationcaroussel: null
      };
    
    default:
      return state;
  }
}

export default formationCarousselReducer;
