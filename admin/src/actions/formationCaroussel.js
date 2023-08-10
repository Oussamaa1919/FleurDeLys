import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_FORMATIONCAROUSSEL,
  FORMATIONCAROUSSEL_ERROR
} from './types';


export const  createFormationCaroussel = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/carousselformation', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_FORMATIONCAROUSSEL,
      payload: res.data
    });

    dispatch(
      setAlert( 'Formation Caroussel modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FORMATIONCAROUSSEL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};