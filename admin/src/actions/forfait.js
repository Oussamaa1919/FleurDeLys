import api from '../utils/api';
import { setAlert } from './alert';

import {  
  ADD_FORFAIT,
  FORFAIT_ERROR,
  DELETE_FORFAIT,
  GET_FORFAITS
} from './types';


export const  createForfait = (formData,navigate ) => async (dispatch) => {
  try {
  
    const res = await api.post('/forfait', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: ADD_FORFAIT,
      payload: res.data
    });

    dispatch(
      setAlert( 'forfait ajouté' , 'success')
    );
    navigate('/forfaits');

    
  } catch (err) {
    dispatch({
      type: FORFAIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getForfait = () => async (dispatch) => {
  try {
    const res = await api.get('/forfait');
    dispatch({
      type: GET_FORFAITS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FORFAIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteForfait = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
  try {
    await api.delete(`/forfait/${id}`);

    dispatch({
      type: DELETE_FORFAIT,
      payload: id
    });

    dispatch(setAlert('Forfait supprimé', 'success'));
  } catch (err) {
    dispatch({
      type: FORFAIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
};