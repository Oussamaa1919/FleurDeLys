import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEuipeImage  } from '../../actions/imageEquipe';

const ImageEquipe = ({createEuipeImage}) => {

  const [photo, setPhoto] = useState(null);
  
  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    
    
      formData.append('photo', photo);
    
    
    await createEuipeImage(formData);
   
    
  }

  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Modifier l'image d'equipe </h2>
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

ImageEquipe.propTypes = {
  createEuipeImage:PropTypes.func.isRequired,
}

export default connect(null,{createEuipeImage}) (ImageEquipe)
