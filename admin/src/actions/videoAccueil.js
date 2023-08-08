import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_VIDEOACCUEIL,
  VIDEOACCUEIL_ERROR
} from './types';


export const  createVideoAccueil = (formData ) =>
async (dispatch) => {
  try {
  
    const res = await api.put('/videoaccuiel', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    dispatch({
      type: UPDATE_VIDEOACCUEIL,
      payload: res.data
    });

    dispatch(
      setAlert( 'Video Accueil modifié' , 'success')
    );

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: VIDEOACCUEIL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};