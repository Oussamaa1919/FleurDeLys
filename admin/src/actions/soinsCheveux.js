import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_SOINSCHEVEUX,
 SOINSCHEVEUX_ERROR
} from './types';


export const  createSoinsCheveux = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/soinscheveux', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_SOINSCHEVEUX,
      payload: res.data
    });

    dispatch(
      setAlert( 'Soins cheveux modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: SOINSCHEVEUX_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};