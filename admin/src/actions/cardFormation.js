import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_CARDFORMATION,
  CARDFORMATION_ERROR
} from './types';


export const  createCardFormation = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/cardformation', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_CARDFORMATION,
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
      type: CARDFORMATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};