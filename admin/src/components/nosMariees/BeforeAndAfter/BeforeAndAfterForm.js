import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBeforeAndAfter  } from '../../../actions/beforeAndAfter';
import { useNavigate,Link } from 'react-router-dom';

const BeforeAndAfterForm = ({createBeforeAndAfter}) => {
  const navigate = useNavigate();

  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [titre, setTitre] = useState('');

  async function handleOnSubmit(e) {
    e.preventDefault();
       
    const formData = new FormData();
    formData.append('titre', titre);
    if (photo1 && photo2) {
      formData.append('photo1', photo1);
      formData.append('photo2', photo2);
    }
    
    await createBeforeAndAfter(formData,navigate);
    setTitre('');
    setPhoto1(null);
    setPhoto2(null);
  }

  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
     <Link to='/nosmariees'>
  <button className='contactCTA contact '  type="button">RETOURNER</button>  
  </Link>
       <h2>ajouter les détails de votre article </h2>
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
              placeholder="* photo1"
              name="photo1"  
              accept="imgage/*"
              id="photo-upload"
              className='custom-file-input-resume'
              onChange={e=>setPhoto1(e.target.files[0])} 

              required         
            />                   
          </div>
          <div className="form-group">
            <input
              type="file"
              placeholder="* photo2"
              name="photo2"  
              accept="imgage/*"
              id="photo-upload"
              className='custom-file-input-resume'
              onChange={e=>setPhoto2(e.target.files[0])} 

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

BeforeAndAfterForm.propTypes = {
  createBeforeAndAfter:PropTypes.func.isRequired,
}

export default connect(null,{createBeforeAndAfter}) (BeforeAndAfterForm)
