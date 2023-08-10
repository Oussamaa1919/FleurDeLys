import {
  UPDATE_CARDFORMATION,
  CARDFORMATION_ERROR
} from '../actions/types';

const initialState = {
  cardformation: null,
  loading: true,
  error: {}
};
function cardFormationReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_CARDFORMATION:
      return {
        ...state,
        cardformation: payload,
        loading: false
      };
    
    case   CARDFORMATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        cardformation: null
      };
    
    default:
      return state;
  }
}

export default cardFormationReducer;
