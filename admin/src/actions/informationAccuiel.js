import api from '../utils/api';
import { setAlert } from './alert';

import {  
  UPDATE_INFORMATIONACCUEIL,
  INFORMATIONACCUEIL_ERROR
} from './types';


export const  createInformationAccueil = (formData, ) =>
async (dispatch) => {
  try {
    const res = await api.put('/informationaccuiel', formData);

    dispatch({
      type: UPDATE_INFORMATIONACCUEIL,
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
      type: INFORMATIONACCUEIL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};