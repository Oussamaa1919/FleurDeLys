import {
  ADD_BEFOREANDAFTER,
  BEFOREANDAFTER_ERROR,
  DELETE_BEFOREANDAFTER,
  GET_BEFOREANDAFTER
} from '../actions/types';

const initialState = {
  beforeandafters:[],
  beforeandafter: null,
  loading: true,
  error: {}
};
function beforeAndafterReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case GET_BEFOREANDAFTER:
      return {
        ...state,
        beforeandafters: payload,
        loading: false
      };
      case DELETE_BEFOREANDAFTER:
      return {
        ...state,
        beforeandafters: state.beforeandafters.filter((beforeandafter) => beforeandafter._id !== payload),
        loading: false,
        error: null,
      };
    
    case   BEFOREANDAFTER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        beforeandafter: null
      };
      case ADD_BEFOREANDAFTER:
      return {
        ...state,
        beforeandafters: [payload, ...state.beforeandafters],
        loading: false
      };
    
    default:
      return state;
  }
}

export default beforeAndafterReducer;
