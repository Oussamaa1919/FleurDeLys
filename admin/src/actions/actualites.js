import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_ACTUALITES,
  ACTUALITES_ERROR
} from './types';


export const  createActualites = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/actualites', formData);

    dispatch({
      type: UPDATE_ACTUALITES,
      payload: res.data
    });

    dispatch(
      setAlert( 'Actualites modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ACTUALITES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};