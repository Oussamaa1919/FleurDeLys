import {
  ADD_BAAEXTENSION,
  BAAEXTENSION_ERROR,
  DELETE_BAAEXTENSION,
  GET_BAAEXTENSION
} from '../actions/types';

const initialState = {
  beforeandafterextensions:[],
  beforeandafterextention: null,
  loading: true,
  error: {}
};
function bAaExtensionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case GET_BAAEXTENSION:
      return {
        ...state,
        beforeandafterextensions: payload,
        loading: false
      };
      case DELETE_BAAEXTENSION:
      return {
        ...state,
        beforeandafterextensions: state.beforeandafterextensions.filter((beforeandafterextention) => beforeandafterextention._id !== payload),
        loading: false,
        error: null,
      };
    
    case   BAAEXTENSION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        beforeandafterextention: null
      };
      case ADD_BAAEXTENSION:
      return {
        ...state,
        beforeandafterextensions: [payload, ...state.beforeandafterextensions],
        loading: false
      };
    
    default:
      return state;
  }
}

export default bAaExtensionReducer;
