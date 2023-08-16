import api from '../utils/api';
import { setAlert } from './alert';

import {  
  ADD_EXTENSION,
  EXTENSION_ERROR
} from './types';


export const  createExtension = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/extension', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: ADD_EXTENSION,
      payload: res.data
    });

    dispatch(
      setAlert( 'Extension modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: EXTENSION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};