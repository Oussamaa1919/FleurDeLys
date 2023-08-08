import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createForfaitsCaroussel  } from '../../actions/forfaitsCaroussel';



const ForfaitsCaroussel = ({createForfaitsCaroussel}) => {

  const [photos, setPhotos] = useState([]);
  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    
    
    for (const photo of photos) {
      formData.append('photos', photo);
    }
    
    
    await createForfaitsCaroussel(formData);
   console.log({photos})
    
  }
  const handlePhotoChange = (event) => {
    const files = event.target.files;
    const newPhotos = Array.from(files);
    setPhotos(newPhotos);
  };

  return (
    
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Ajouter les images des forfaits</h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form" encType='multipart/form-data' onSubmit={handleOnSubmit}>
        <div className="form-group">
            <input
              type="file"
              placeholder="* photos"
              name="photos"    
              className='custom-file-input-resume'
              id="photos-upload" 
              accept="image/*"
              multiple
              onChange={handlePhotoChange} 
              required      
            />                   
          </div>

        
       <input type="submit" className="internshipBtn" value="AJOUTER" />
      
     </form>
     </div>
   </div>
   </div>
 
</div>
</div>
   
  )
}

ForfaitsCaroussel.propTypes = {
  createForfaitsCaroussel:PropTypes.func.isRequired,
}
export default connect(null,{createForfaitsCaroussel})(ForfaitsCaroussel)
