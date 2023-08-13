import {
  ADD_FORFAIT,
  FORFAIT_ERROR,
  DELETE_FORFAIT,
  GET_FORFAITS
} from '../actions/types';

const initialState = {
  forfaits:[],
  forfait: null,
  loading: true,
  error: {}
};
function forfaitReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case GET_FORFAITS:
      return {
        ...state,
        forfaits: payload,
        loading: false
      };
      case DELETE_FORFAIT:
      return {
        ...state,
        forfaits: state.forfaits.filter((forfait) => forfait._id !== payload),
        loading: false,
        error: null,
      };
    
    case   FORFAIT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        forfait: null
      };
      case ADD_FORFAIT:
      return {
        ...state,
        forfaits: [payload, ...state.forfaits],
        loading: false
      };
    
    default:
      return state;
  }
}

export default forfaitReducer;
