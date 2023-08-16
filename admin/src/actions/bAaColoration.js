import api from '../utils/api';
import { setAlert } from './alert';

import {  
  ADD_BAACOLORATION,
  BAACOLORATION_ERROR,
  DELETE_BAACOLORATION,
  GET_BAACOLORATION
} from './types';


export const  createBeforeAndAfterColoration = (formData,navigate ) => async (dispatch) => {
  try {
  
    const res = await api.post('/baacoloration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: ADD_BAACOLORATION,
      payload: res.data
    });

    dispatch(
      setAlert( 'Before and after photos ajoutées' , 'success')
    );
    navigate('/nosservices');

    
  } catch (err) {
    dispatch({
      type: BAACOLORATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getBeforeAndAfterColoration = () => async (dispatch) => {
  try {
    const res = await api.get('/baacoloration');
    dispatch({
      type: GET_BAACOLORATION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BAACOLORATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteBeforeAndAfterColoration = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
  try {
    await api.delete(`/baacoloration/${id}`);

    dispatch({
      type: DELETE_BAACOLORATION,
      payload: id
    });

    dispatch(setAlert('before and after photos supprimées', 'success'));
  } catch (err) {
    dispatch({
      type:   BAACOLORATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
};
