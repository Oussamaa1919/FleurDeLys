import React,{ useState } from 'react'
import Actualites from './Actualites'
import ImageActualites from './ImageActualites'
const Actualitesform = () => {

  const [activeForm, setActiveForm] = useState('actualites'); // Initial active form
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'actualites':
        return <Actualites />;
      case 'imageactualites':
        return < ImageActualites/>;
     
      default:
        return null;
    }
  };
  return (
    <div className='container-trainings'>
 <div className='main'>
 <div class="cardBox">
        <div class="card" className="card" onClick={() => handleFormChange('actualites')}>
            <div class="numbers">Actualites </div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('imageactualites')}>
            <div class="numbers">Image Actualites</div>
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

export default Actualitesform
