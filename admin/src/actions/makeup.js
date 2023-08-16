import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_MAKEUP,
  MAKEUP_ERROR
} from './types';


export const  createMakeup = (formData ) =>
async (dispatch) => {
  try {
    const res = await api.put('/makeup', formData);

    dispatch({
      type: UPDATE_MAKEUP,
      payload: res.data
    });

    dispatch(
      setAlert( 'Information Accueil modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type:   MAKEUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};