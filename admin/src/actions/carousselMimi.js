import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_CAROUSSELMIMI,
  CAROUSSELMIMI_ERROR
} from './types';


export const  createCarousselMimi = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/carousselmimi', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_CAROUSSELMIMI,
      payload: res.data
    });

    dispatch(
      setAlert( ' Caroussel MiMi modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CAROUSSELMIMI_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};