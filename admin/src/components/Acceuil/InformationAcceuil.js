import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createInformationAccueil } from '../../actions/informationAccuiel'; // Make sure to import the correct path

const InformationAcceuil = () => {
  const dispatch = useDispatch();
  const informationAccueilState = useSelector(state => state.informationAccueil);

  const [formData, setFormData] = useState({
    description: '',
    titreactualités: '',
    actualités: ''
  });

  const { description, titreactualités, actualités } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createInformationAccueil(formData));
  };

  return (
    <div className='container-trainings'>
      <div className='main'>
        <div className="details">
          <div className="table">
            <div className="Header">
              <h2>{informationAccueilState.informationaccueil ? 'Modifier' : 'Ajouter'} les informations d'accueil</h2>
              <small>* = required field</small>
            </div>
            <div className="internship">
              <form className="form" onSubmit={onSubmit}>
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
                  value={informationAccueilState.informationaccueil ? 'MODIFIER' : 'AJOUTER'}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationAcceuil;