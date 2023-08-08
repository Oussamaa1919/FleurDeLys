import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createVideoAccueil  } from '../../actions/videoAccueil';

const VideoDacceuil = ({createVideoAccueil}) => {
  const [video, setVideo] = useState(null);
  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    
    
      formData.append('video', video);
    
    
    await createVideoAccueil(formData);
   
    
  }

  

  return (
    <div className='container-trainings'>
    <div className='main'>
   
    <div className="details">
    
        
      <div className="table">
        <div className="Header">
         
          <h2>Ajouter votre video ici </h2>
          <small>* = required field</small>
        </div>
        <div className="internship">
        <form
      className="form"  encType='multipart/form-data' onSubmit={handleOnSubmit}>
           <div className="form-group">
               <input
                 type="file"
                 placeholder="* video"
                 name="video"    
                 className='custom-file-input-resume'
                 id="video-upload" 
                 accept="video/*"
                 onChange={e=>setVideo(e.target.files[0])} 
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
VideoDacceuil.propTypes = {
  createVideoAccueil:PropTypes.func.isRequired,
}

export default connect(null,{createVideoAccueil})(VideoDacceuil)
