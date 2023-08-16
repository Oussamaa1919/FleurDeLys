import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_CAROUSSELHAIR,
  CAROUSSELHAIR_ERROR
} from './types';


export const  createCarousselHair = (formData) =>
async (dispatch) => {
  try {
    const res = await api.put('/carousselhair', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_CAROUSSELHAIR,
      payload: res.data
    });

    dispatch(
      setAlert( ' Caroussel  modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CAROUSSELHAIR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};