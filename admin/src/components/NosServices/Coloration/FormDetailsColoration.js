import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createColoration  } from '../../../actions/coloration';
import { Link} from 'react-router-dom';

const FormDetailsColoration = ({createColoration}) => {

  const [photo, setPhoto] = useState(null);
  const [titre, setTitre] = useState('');

  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    formData.append('titre', titre);
    if (photo ) {
      formData.append('photo', photo);
    }
    
    await createColoration(formData);
    setTitre('');
    setPhoto('');
  }

  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
     <Link to='/nosservices'>
  <button className='contactCTA contact '  type="button">RETOURNER</button>  
  </Link>
       <h2>ajouter les détails de l'interface coloration </h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form" encType='multipart/form-data'  onSubmit={handleOnSubmit}>
     <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre "
                    name="titre"
                    value={titre}
                    onChange={e=>setTitre(e.target.value)}
                    required
                  />
                </div>
        <div className="form-group">
            <input
              type="file"
              placeholder="* photo1"
              name="photo1"  
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

FormDetailsColoration.propTypes = {
  createColoration:PropTypes.func.isRequired,
}

export default connect(null,{createColoration}) (FormDetailsColoration)
