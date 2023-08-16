import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSoinsCheveux  } from '../../actions/soinsCheveux';
const SoinsCheveux = ({createSoinsCheveux}) => {
  const [formValues, setFormValues] = useState({
    titre1: '',
    titre2: '',
    description: '',
    link: '',
    photo1: null,
    photo2: null,
    
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
  
    await createSoinsCheveux(formData);
  
    // Clear form values
    setFormValues({
      titre1: '',
      titre2: '',
      description: '',
      link: '',
      photo1: null,
      photo2: null,
     
    });
  }


  

  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Modifier Coiffure </h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form" encType='multipart/form-data' onSubmit={handleOnSubmit}>
         
         <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre 1"
                    name="titre1"
                    value={formValues.titre1}
                    onChange={e => handleFieldChange('titre1', e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre 2"
                    name="titre2"
                    value={formValues.titre2}
                    onChange={e => handleFieldChange('titre2', e.target.value)}
                    required
                  />
                </div>
         
         <div className='form-group'>
                <textarea
                    id="description"
                    name="description"
                    placeholder="* description"
                    value={formValues.description}
                    onChange={e => handleFieldChange('description', e.target.value)}
                    required
                  />
                </div>
               
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link "
                    name="link"
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
              onChange={e => handleFieldChange('photo1', e.target.files[0])}


              required         
            />                   
          </div>
          <div className="form-group">
            <input
              type="file"
              placeholder="* photo 2"
              name="photo"  
              accept="imgage/*"
              id="photo-upload"
              className='custom-file-input-resume'
              onChange={e => handleFieldChange('photo2', e.target.files[0])}


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


SoinsCheveux.propTypes = {
  createSoinsCheveux:PropTypes.func.isRequired,
}

export default connect(null,{createSoinsCheveux}) (SoinsCheveux)
