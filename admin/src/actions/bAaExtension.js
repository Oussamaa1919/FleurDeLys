import api from '../utils/api';
import { setAlert } from './alert';

import {  
  ADD_BAAEXTENSION,
  BAAEXTENSION_ERROR,
  DELETE_BAAEXTENSION,
  GET_BAAEXTENSION
} from './types';


export const  createBeforeAndAfterExtension = (formData,navigate ) => async (dispatch) => {
  try {
  
    const res = await api.post('/baaextenstion', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: ADD_BAAEXTENSION,
      payload: res.data
    });

    dispatch(
      setAlert( 'Before and after photos ajoutées' , 'success')
    );
    navigate('/nosservices');

    
  } catch (err) {
    dispatch({
      type: BAAEXTENSION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getBeforeAndAfterExtension = () => async (dispatch) => {
  try {
    const res = await api.get('/baaextenstion');
    dispatch({
      type: GET_BAAEXTENSION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BAAEXTENSION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteBeforeAndAfterExtension = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
  try {
    await api.delete(`/baaextenstion/${id}`);

    dispatch({
      type: DELETE_BAAEXTENSION,
      payload: id
    });

    dispatch(setAlert('before and after photos supprimées', 'success'));
  } catch (err) {
    dispatch({
      type:   BAAEXTENSION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
};