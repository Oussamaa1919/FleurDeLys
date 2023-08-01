
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login'
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';
import Home from './components/layout/Home';
import SideBar from './components/layout/SideBar'
import Navbar from './components/layout/Navbar';

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



      </Routes>
    </Router>
  </Provider>
  );
};

export default App;
