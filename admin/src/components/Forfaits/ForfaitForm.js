import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createForfait  } from '../../actions/forfait';
import { useNavigate,Link } from 'react-router-dom';

const ForfaitForm = ({createForfait}) => {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [titre, setTitre] = useState('');

  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    formData.append('titre', titre);
    if (photo) {
      formData.append('photo', photo);
    }
    
    await createForfait(formData,navigate);
    setTitre('');
    setPhoto(null);
  }

  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
     <Link to='/forfaits'>
  <button className='contactCTA contact '  type="button">RETOURNER</button>  
  </Link>
       <h2>ajouter les détails de votre forfait </h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form" encType='multipart/form-data'  onSubmit={handleOnSubmit}>
     <div className='form-group'>
                  <input
                    type="text"
                    placeholder="* Titre actualités"
                    name="titre"
                    value={titre}
                    onChange={e=>setTitre(e.target.value)}
                    required
                  />
                </div>
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

ForfaitForm.propTypes = {
  createForfait:PropTypes.func.isRequired,
}

export default connect(null,{createForfait}) (ForfaitForm)
