import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_SOINSVISAGE,
  SOINSVISAGE_ERROR
} from './types';


export const  createSoinsVisage = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/soinsvisage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_SOINSVISAGE,
      payload: res.data
    });

    dispatch(
      setAlert( 'Soins visage modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: SOINSVISAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};