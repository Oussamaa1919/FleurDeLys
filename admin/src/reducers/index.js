import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import informationAccueil from'./informationAccueil';
import videoAccueil from './videoAccueil';
import forfaitsCaroussel from './forfaitsCaroussel'
export default combineReducers({
  alert,
  auth,
  informationAccueil,
  videoAccueil,
  forfaitsCaroussel
  
});
