import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_EQUIPECAROUSSEL,
  EQUIPECAROUSSEL_ERROR
} from './types';


export const  createEquipeCaroussel = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/equipecaroussel', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_EQUIPECAROUSSEL,
      payload: res.data
    });

    dispatch(
      setAlert( 'Equipe Caroussel modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: EQUIPECAROUSSEL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};