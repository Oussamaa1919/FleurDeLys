import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAtualitesImage  } from '../../actions/imageActualites';

const ImageActualites = ({createAtualitesImage}) => {

  const [photo, setPhoto] = useState(null);
  
  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    
    
      formData.append('photo', photo);
    
    
    await createAtualitesImage(formData);
   
    
  }

  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Modifier l'image Actualites </h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form" encType='multipart/form-data'  onSubmit={handleOnSubmit}>
        <div className="form-group">
            <input
              type="file"
              placeholder="* photo"
              name="photo"  
              accept="imgage/*"
              id="photo-upload"
              className='custom-file-input-resume'
              onChange={e=>setPhoto(e.target.files[0])} 

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

ImageActualites.propTypes = {
  createAtualitesImage:PropTypes.func.isRequired,
}

export default connect(null,{createAtualitesImage}) (ImageActualites)
