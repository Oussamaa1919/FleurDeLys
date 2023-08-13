import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createActualites } from '../../actions/actualites'; 

const Actualites = ({createActualites}) => {

  const [formData, setFormData] = useState({
    
    
    titre: '',
    text: '',
    
    
    
  });

  const { titre, text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  

  return (
    <div className='container-trainings'>
      <div className='main'>
        <div className="details">
          <div className="table">
            <div className="Header">
              <h2> Modifier les informations d'accueil</h2>
              <small>* = required field</small>
            </div>
            <div className="internship">
              <form className="form"onSubmit={(e)=> {
        e.preventDefault();
        createActualites(formData);
      }}>
                
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre actualités"
                    name="titre"
                    value={titre}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                <textarea
                    id="text"
                    name="text"
                    placeholder="* actualités"
                    value={text}
                    onChange={onChange}
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="internshipBtn"
                  value='MODIFIER'  
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Actualites.propTypes={
  createActualites:PropTypes.func.isRequired,
}
export default connect(null,{createActualites})(Actualites);