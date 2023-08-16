import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createExtension  } from '../../../actions/extension';


const ExtensionDetailsForm = ({createExtension}) => {
  const [formValues, setFormValues] = useState({
    titre1: '',
    description: '',
    titre2: '',
    link1: '',
    link2: '',
    link3: '',
    
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
  
    await createExtension(formData);
  
    // Clear form values
    setFormValues({
      titre1: '',
      description: '',
      titre2: '',
    
      link1: '',
      link2: '',
      link3: '',
  
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
      
       <h2>Modifier l'interface de l'extension des cils </h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form" encType='multipart/form-data' onSubmit={handleOnSubmit}>
         
         <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre 1"
                    name="titre"
                    value={formValues.titre1}
                    onChange={e => handleFieldChange('titre1', e.target.value)}
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
                    placeholder="* Titre 2"
                    name="titre"
                    value={formValues.titre2}
                    onChange={e => handleFieldChange('titre2', e.target.value)}
                    required
                  />
                </div>
                
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link 1"
                    name="titre"
                    value={formValues.link1}
                    onChange={e => handleFieldChange('link1', e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link 2"
                    name="titre"
                    value={formValues.link2}
                    onChange={e => handleFieldChange('link2', e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Link 3"
                    name="titre"
                    value={formValues.link3}
                    onChange={e => handleFieldChange('link3', e.target.value)}
                    required
                  />
                </div>
                
        
        
        <div className="form-group">
            <input
              type="file"
              placeholder="* photo "
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


ExtensionDetailsForm.propTypes = {
  createExtension:PropTypes.func.isRequired,
}

export default connect(null,{createExtension}) (ExtensionDetailsForm)
