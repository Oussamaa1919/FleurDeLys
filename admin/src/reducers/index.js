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
import actualites from './actualites'
import forfait from './forfait' 
import CarousselAccessoires from './CarousselAccessoires';
import carousselMimi from './carousselMimi';
import Onglerie from './Onglerie';
import carousselHair from './carousselHair';
import soinsVisage from './soinsVisage';
import soinsCheveux from './soinsCheveux';
import makeup from './makeup';
import beforeAndafter from './beforeAndafter';
import bAaExtension from './bAaextenstion';
import bAaColoration from './bAaColoration';
import coloration from './coloration';
import extension from './extension';



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
  imageEquipe,
  actualites,
  forfait,
  CarousselAccessoires,
  carousselMimi,
  Onglerie,
  carousselHair,
  soinsVisage,
  soinsCheveux,
  makeup,
  beforeAndafter,
  bAaExtension,
  bAaColoration,
  coloration,
  extension
  

  
});
