import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_FORMATIONDESCRIPTION,
  FORMATIONDESCRIPTION_ERROR
} from './types';


export const  createFormationDescription = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/formations', formData);

    dispatch({
      type: UPDATE_FORMATIONDESCRIPTION,
      payload: res.data
    });

    dispatch(
      setAlert( 'Formation description modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FORMATIONDESCRIPTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};