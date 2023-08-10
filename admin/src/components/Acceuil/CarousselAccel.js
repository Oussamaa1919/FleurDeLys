import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCarousselAccel  } from '../../actions/carousselAccel';

const CarousselAccel = ({createCarousselAccel}) => {

  const [photos, setPhotos] = useState([]);
  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    
    
    for (const photo of photos) {
      formData.append('photos', photo);
    }
    
    
    await createCarousselAccel(formData);
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
         
          <h2>Ajouter les images de la caroussel</h2>
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
CarousselAccel.propTypes = {
  createCarousselAccel : PropTypes.func.isRequired,
}
export default connect(null,{createCarousselAccel}) (CarousselAccel)
