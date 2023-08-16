import api from '../utils/api';
import { setAlert } from './alert';

import {  
  ADD_COLORATION,
  COLORATION_ERROR
} from './types';


export const  createColoration = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/coloration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: ADD_COLORATION,
      payload: res.data
    });

    dispatch(
      setAlert( 'photo modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: COLORATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};