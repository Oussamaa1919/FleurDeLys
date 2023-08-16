import {
  ADD_EXTENSION,
  EXTENSION_ERROR
} from '../actions/types';

const initialState = {
  extension: null,
  loading: true,
  error: {}
};
function extensionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case ADD_EXTENSION:
      return {
        ...state,
        extension: payload,
        loading: false
      };
    
    case   EXTENSION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        extension: null
      };
    
    default:
      return state;
  }
}

export default extensionReducer;
