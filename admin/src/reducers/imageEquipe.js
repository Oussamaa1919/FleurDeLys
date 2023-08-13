import {
  UPDATE_IMAGEEQUIPE,
  IMAGEEQUIPE_ERROR
} from '../actions/types';

const initialState = {
  equipeimage: null,
  loading: true,
  error: {}
};
function imageEquipeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case UPDATE_IMAGEEQUIPE:
      return {
        ...state,
        equipeimage: payload,
        loading: false
      };
    
    case   IMAGEEQUIPE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        equipeimage: null
      };
    
    default:
      return state;
  }
}

export default imageEquipeReducer;
