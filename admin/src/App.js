
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login'
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';
import Home from './components/Acceuil/Home';
import SideBar from './components/layout/SideBar'
import Navbar from './components/layout/Navbar';
import VideoDacceuil from './components/Acceuil/VideoDacceuil';
import ForfaitsCaroussel from './components/Acceuil/ForfaitsCaroussel';
import CarousselAccel from './components/Acceuil/CarousselAccel';
import InformationAcceuil from './components/Acceuil/InformationAcceuil';
import NosMariees from './components/nosMariees/NosMariees';
import EquipeFrom from './components/Equipe/EquipeForm';
import Actualitesform from './components/Actualites/Actualitesform';
import PasswordForm from './components/auth/PasswordForm';
import Formations from './components/NosFormations/Formations';
import Forfaits from './components/Forfaits/Forfaits';
import ForfaitForm from './components/Forfaits/ForfaitForm';
import NosServices from './components/NosServices/NosServices';
import BeforeAndAfter from './components/nosMariees/BeforeAndAfter/BeforeAndAfter';
import BeforeAndAfterForm from './components/nosMariees/BeforeAndAfter/BeforeAndAfterForm';
import ExtensionDesCilsForm from './components/NosServices/ExtensionDesCils/ExtensionDesCilsForm';
import ExtensionDesCils from './components/NosServices/ExtensionDesCils/ExtensionDesCils';
import ColorationForm from './components/NosServices/Coloration/ColorationForm';
import FormDetailsColoration from './components/NosServices/Coloration/FormDetailsColoration';
import ExtensionDetailsForm from './components/NosServices/ExtensionDesCils/ExtensionDetailsForm';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';





const App = () => {
  
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  
  return (
    <Provider store={store}>
    <Router>
      
      <Alert />
      <SideBar />
      <Navbar />
      <Routes>
     
      <Route path="login" element={<Login />} />
      <Route path="home" element={<PrivateRoute component={Home} />} />
      <Route path="informationacceuil" element={<PrivateRoute component={InformationAcceuil} />} />
      <Route path="videoacceuil" element={<PrivateRoute component={VideoDacceuil} />} />
      <Route path="carousselaccel" element={<PrivateRoute component={CarousselAccel} />} />
      <Route path="faorfaitscaroussel" element={<PrivateRoute component={ForfaitsCaroussel} />} />
      <Route path="nosmariees" element={<PrivateRoute component={NosMariees} />} />
      <Route path="equipe" element={<PrivateRoute component={EquipeFrom} />} />
      <Route path="actualites" element={<PrivateRoute component={Actualitesform} />} />
      <Route path="passwordform" element={<PrivateRoute component={PasswordForm} />} />
      <Route path="formations" element={<PrivateRoute component={Formations} />} />
      <Route path="forfaits" element={<PrivateRoute component={Forfaits} />} />
      <Route path="forfaitfrorm" element={<PrivateRoute component={ForfaitForm} />} />
      <Route path="nosservices" element={<PrivateRoute component={NosServices} />} />
      <Route path="beforeandafter" element={<PrivateRoute component={BeforeAndAfter} />} />
      <Route path="beforeandafterform" element={<PrivateRoute component={BeforeAndAfterForm} />} />
      <Route path="extensionform" element={<PrivateRoute component={ExtensionDesCilsForm} />} />
      <Route path="extension" element={<PrivateRoute component={ExtensionDesCils} />} />
      <Route path="colorationform" element={<PrivateRoute component={ColorationForm} />} />
      <Route path="formcolorationdetails" element={<PrivateRoute component={FormDetailsColoration} />} />
      <Route path="formextensiondetails" element={<PrivateRoute component={ExtensionDetailsForm} />} />




      </Routes>
    </Router>
  </Provider>
  );
};

export default App;
