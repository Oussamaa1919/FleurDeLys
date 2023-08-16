import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSoinsVisage  } from '../../actions/soinsVisage';
const SoinsVisages = ({createSoinsVisage}) => {
  const [formValues, setFormValues] = useState({
    titre: '',
    description: '',
    link:'',
    photo: null,
    
  });
  
  const handleFieldChange = (fieldName, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
  
  async function handleOnSubmit(e) {
    e.preventDefault();
  
    const formData = new FormData();
    for (const fieldName in formValues) {
      if (fieldName.startsWith("photo")) {
        if (formValues[fieldName]) {
          formData.append(fieldName, formValues[fieldName]);
        }
      } else {
        formData.append(fieldName, formValues[fieldName]);
      }
    }
  
    await createSoinsVisage(formData);
  
    // Clear form values
    setFormValues({
      titre: '',
      description: '',
      link: '',
      photo: null,
    });
  }


  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Modifier Soins Visage </h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form" encType='multipart/form-data'  onSubmit={handleOnSubmit}>
       <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre 1"
                    name="titre"
                    value={formValues.titre}
                    onChange={e => handleFieldChange('titre', e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Description"
                    name="titre"
                    value={formValues.description}
                    onChange={e => handleFieldChange('description', e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link"
                    name="titre"
                    value={formValues.link}
                    onChange={e => handleFieldChange('link', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
            <input
              type="file"
              placeholder="* photo 1"
              name="photo"  
              accept="imgage/*"
              id="photo-upload"
              className='custom-file-input-resume'
              onChange={e => handleFieldChange('photo', e.target.files[0])}


              required         
            />                   
          </div>
        
       <input type="submit" className="internshipBtn" value="MODIFIER" />
      
     </form>
     </div>
   </div>
   </div>
 
</div>
</div>
    </div>
  )
}


SoinsVisages.propTypes = {
  createSoinsVisage:PropTypes.func.isRequired,
}

export default connect(null,{createSoinsVisage}) (SoinsVisages)