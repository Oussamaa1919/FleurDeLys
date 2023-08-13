import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import informationAccueil from'./informationAccueil';
import videoAccueil from './videoAccueil';
import forfaitsCaroussel from './forfaitsCaroussel'
import carousselAccel from './carousselAccel'
import CardFormation from './cardFormation';
import formationDescription from './formationDescription'
import formationCaroussel from './formationCaroussel'
import equipeCaroussel from './equipeCaroussel'
import imageEquipe from './imageEquipe'
export default combineReducers({
  alert,
  auth,
  informationAccueil,
  videoAccueil,
  forfaitsCaroussel,
  carousselAccel,
  CardFormation,
  formationDescription,
  formationCaroussel,
  equipeCaroussel,
  imageEquipe
  
});
