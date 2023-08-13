import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_IMAGEACTUALITES,
  IMAGEACTUALITES_ERROR
} from './types';


export const  createAtualitesImage = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/actualitesimage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_IMAGEACTUALITES,
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
      type: IMAGEACTUALITES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

