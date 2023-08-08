import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_CAROUSSELACCEL,
  CAROUSSELACCEL_ERROR
} from './types';


export const  createCarousselAccel = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/carousselaccel', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_CAROUSSELACCEL,
      payload: res.data
    });

    dispatch(
      setAlert( ' Caroussel Accel modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CAROUSSELACCEL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};