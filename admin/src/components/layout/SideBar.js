
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Login from '../auth/Login';
import fdl from '../../images/fdl.png'

const SideBar = ({ auth: { isAuthenticated }, logout }) => {
  
 

  
  const authLinks = (
  <Fragment>
  <div className='container'>
    <div className='navigation'>
      <ul>
      <li>
          <a href='#'>
            <span ><img src={fdl } alt=''/></span>
            <span className="title">Fleur De Lys</span>
          </a>
        </li>
        <li>
          <Link to= '/home'>
          <a href='#'>
            <span className="title">Acceuil</span>
          </a>
          </Link>
        </li>

        <li>
        <Link to='/nosmariees'>
        <a href="#">
            <span className="title">Nos Mariées </span>
          </a>
          </Link>
          </li>

          <li>
        <Link to='/events'>
        <a href="#">
            <span className="title">Nos Services</span>
          </a>
          </Link>
          </li>

         

        <li>
        <Link to='/equipe'>
        <a href="#">
            <span className="title">Equipe</span>
          </a>
          </Link>
          </li>
          <li>
            <Link to='/nosforfaits'>
            <a href="#">
            <span className="title">Nos Forfaits</span>
          </a>
          </Link>
          </li>
          <li>
            <Link to='/formations'>
            <a href="#">
            <span className="title">Nos Formations</span>
          </a>
          </Link>
          </li>
          <li>
            <Link to='/actualites'>
            <a href="#">
            <span className="title">Actualités</span>
          </a>
          </Link>
          </li>
          <li>
            <Link to='/trainings'>
            <a href="#">
            <span className="title">FDL Beauty Shop</span>
          </a>
          </Link>
          </li>
          <li>
        <Link to='/passwordform'>
        <a href="#">
            <span className="title">Password</span>
          </a>
          </Link>
          </li>
        <li>
        <a onClick={logout}  href='#'>
       <span className='icon'> <i className="fas fa-sign-out-alt" />{' '} </span>
        <span className="title">Logout</span>
      </a>
        </li>
      </ul>

    </div>
    
  </div>
  </Fragment>
  );
  const guestLinks = (    
      <Login />  
);
  return (
    <nav className='navbar bg-dark' > 
      <Fragment>{isAuthenticated ? authLinks  : guestLinks }</Fragment>
    </nav>
  );
};

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout }) (SideBar)
