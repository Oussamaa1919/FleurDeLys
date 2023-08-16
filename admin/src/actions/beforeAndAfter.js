import api from '../utils/api';
import { setAlert } from './alert';

import {  
  ADD_BEFOREANDAFTER,
  BEFOREANDAFTER_ERROR,
  DELETE_BEFOREANDAFTER,
  GET_BEFOREANDAFTER
} from './types';


export const  createBeforeAndAfter = (formData,navigate ) => async (dispatch) => {
  try {
  
    const res = await api.post('/beforeandafter', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: ADD_BEFOREANDAFTER,
      payload: res.data
    });

    dispatch(
      setAlert( 'Before and after photos ajoutées' , 'success')
    );
    navigate('/nosmariees');

    
  } catch (err) {
    dispatch({
      type: BEFOREANDAFTER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getBeforeAndAfters = () => async (dispatch) => {
  try {
    const res = await api.get('/beforeandafter');
    dispatch({
      type: GET_BEFOREANDAFTER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BEFOREANDAFTER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteBeforeAndAfter = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
  try {
    await api.delete(`/beforeandafter/${id}`);

    dispatch({
      type: DELETE_BEFOREANDAFTER,
      payload: id
    });

    dispatch(setAlert('before and after photos supprimées', 'success'));
  } catch (err) {
    dispatch({
      type:   BEFOREANDAFTER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
};