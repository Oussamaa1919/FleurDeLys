import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import informationAccueil from'./informationAccueil';
import videoAccueil from './videoAccueil';

export default combineReducers({
  alert,
  auth,
  informationAccueil,
  videoAccueil
  
});
