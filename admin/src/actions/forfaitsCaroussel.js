import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_FORFAITSCAROUSSEL,
  FORFAITSCAROUSSEL_ERROR
} from './types';


export const  createForfaitsCaroussel = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/forfaitscaroussel', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_FORFAITSCAROUSSEL,
      payload: res.data
    });

    dispatch(
      setAlert( 'Forfaits Caroussel modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FORFAITSCAROUSSEL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};