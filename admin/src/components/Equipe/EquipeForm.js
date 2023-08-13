import React,{ useState } from 'react'
import Equipe from './Equipe'
import ImageEquipe from './ImageEquipe'
const EquipeForm = () => {

  const [activeForm, setActiveForm] = useState('equipe'); // Initial active form
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'equipe':
        return <Equipe />;
      case 'imageequipe':
        return < ImageEquipe/>;
     
      default:
        return null;
    }
  };
  return (
    <div className='container-trainings'>
 <div className='main'>
 <div class="cardBox">
        <div class="card" className="card" onClick={() => handleFormChange('equipe')}>
            <div class="numbers">Equipe Caroussel</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('imageequipe')}>
            <div class="numbers">Image Equipe</div>
        </div>
        
      </div>
 <div className="details">
 
     
   
     
     {/* Render the active form */}
     {renderForm()}
   
   </div>
 
</div>
</div>
  )
}

export default EquipeForm
