import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_ONGLERIE,
  ONGLERIE_ERROR
} from './types';


export const  createOnglerie = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/onglerie', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_ONGLERIE,
      payload: res.data
    });

    dispatch(
      setAlert( 'Onglerie modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ONGLERIE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};