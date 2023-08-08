import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createInformationAccueil } from '../../actions/informationAccuiel'; 

const InformationAcceuil = ({createInformationAccueil}) => {

  const [formData, setFormData] = useState({
    
    
    description: '',
    titreactualités: '',
    actualités: '',  
    
    
    
  });

  const { description, titreactualités, actualités } = formData;

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
        createInformationAccueil(formData);
      }}>
                <div className='form-group'>
                <textarea
                    id="description"
                    name="description"
                    placeholder="* description"
                    value={description}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre actualités"
                    name="titreactualités"
                    value={titreactualités}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                <textarea
                    id="actualités"
                    name="actualités"
                    placeholder="* actualités"
                    value={actualités}
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
InformationAcceuil.propTypes={
  createInformationAccueil:PropTypes.func.isRequired,
}
export default connect(null,{createInformationAccueil})(InformationAcceuil);