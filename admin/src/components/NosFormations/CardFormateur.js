import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCardFormation  } from '../../actions/cardFormation';

const CardFormateur = ({createCardFormation}) => {

  const [photo, setPhoto] = useState(null);
  
  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    
    
      formData.append('photo', photo);
    
    
    await createCardFormation(formData);
   
    
  }

  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Ajouter l'image de la card formateur ici</h2>
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

        
       <input type="submit" className="internshipBtn" value="AJOUTER" />
      
     </form>
     </div>
   </div>
   </div>
 
</div>
</div>
    </div>
  )
}

CardFormateur.propTypes = {
  createCardFormation:PropTypes.func.isRequired,
}

export default connect(null,{createCardFormation}) (CardFormateur)
