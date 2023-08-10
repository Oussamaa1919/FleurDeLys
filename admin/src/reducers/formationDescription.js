import {
  UPDATE_FORMATIONDESCRIPTION,
  FORMATIONDESCRIPTION_ERROR
} from '../actions/types';

const initialState = {
  formationdescription: null,
  loading: true,
  error: {}
};
function formationDescriptionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_FORMATIONDESCRIPTION:
      return {
        ...state,
        formationdescription: payload,
        loading: false
      };
    
    case   FORMATIONDESCRIPTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        formationdescription: null
      };
    
    default:
      return state;
  }
}

export default formationDescriptionReducer;
