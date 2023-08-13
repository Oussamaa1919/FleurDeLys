import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_CAROUSSELACCESSOIRES,
  CAROUSSELACCESSOIRES_ERROR
} from './types';


export const  createCarousselAccessoires = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/carousselaccessoires', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_CAROUSSELACCESSOIRES,
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
      type: CAROUSSELACCESSOIRES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};