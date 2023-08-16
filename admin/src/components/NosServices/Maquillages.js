import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createMakeup } from '../../actions/makeup'; 

const Maquillages = ({createMakeup}) => {
  const [formData, setFormData] = useState({
    
    
    titre1: '',
    titre2: '',
    titre3: '',
    titre4: '',
    titre5: '',
    link1: '',
    link2: '',
    link3: '',
    link4: '',
    link5: '',
    link6: '',
    link7: '',
    link8: '',
    link9: '',
    
    
    
  });

  const { titre1, titre2, titre3, titre4, titre5,link1,link2,link3,link4,link5,link6,link7,link8,link9 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  

  return (
    <div className='container-trainings'>
      <div className='main'>
        <div className="details">
          <div className="table">
            <div className="Header">
              <h2> Modifier les informations de Maquillages</h2>
              <small>* = required field</small>
            </div>
            <div className="internship">
              <form className="form"onSubmit={(e)=> {
        e.preventDefault();
        createMakeup(formData);
      }}>
                
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre1"
                    name="titre1"
                    value={titre1}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre2"
                    name="titre2"
                    value={titre2}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre3"
                    name="titre3"
                    value={titre3}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre4"
                    name="titre4"
                    value={titre4}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre5"
                    name="titre5"
                    value={titre5}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link1"
                    name="link1"
                    value={link1}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link2"
                    name="link2"
                    value={link2}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link3"
                    name="link3"
                    value={link3}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link4"
                    name="link4"
                    value={link4}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link5"
                    name="link5"
                    value={link5}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link6"
                    name="link6"
                    value={link6}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link7"
                    name="link7"
                    value={link7}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link8"
                    name="link8"
                    value={link8}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link9"
                    name="link9"
                    value={link9}
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
Maquillages.propTypes={
  createMakeup:PropTypes.func.isRequired,
}
export default connect(null,{createMakeup})(Maquillages);