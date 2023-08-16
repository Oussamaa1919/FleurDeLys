import {
  ADD_BAACOLORATION,
  BAACOLORATION_ERROR,
  DELETE_BAACOLORATION,
  GET_BAACOLORATION
} from '../actions/types';

const initialState = {
  beforeandaftercolorations:[],
  beforeandaftercoloration: null,
  loading: true,
  error: {}
};
function bAaColorationReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case GET_BAACOLORATION:
      return {
        ...state,
        beforeandaftercolorations: payload,
        loading: false
      };
      case DELETE_BAACOLORATION:
      return {
        ...state,
        beforeandaftercolorations: state.beforeandaftercolorations.filter((beforeandaftercoloration) => beforeandaftercoloration._id !== payload),
        loading: false,
        error: null,
      };
    
    case   BAACOLORATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        beforeandaftercoloration: null
      };
      case ADD_BAACOLORATION:
      return {
        ...state,
        beforeandaftercolorations: [payload, ...state.beforeandaftercolorations],
        loading: false
      };
    
    default:
      return state;
  }
}

export default bAaColorationReducer;
