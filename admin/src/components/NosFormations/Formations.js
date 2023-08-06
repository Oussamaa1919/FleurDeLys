import React,{ useState } from 'react'
import CardFormateur from './CardFormateur';
import CarousselFormation from './CarousselFormation';
import FormationDescription from './FormationDescription';

const Formations = () => {const [activeForm, setActiveForm] = useState('formationdescription'); // Initial active form
const handleFormChange = (formName) => {
  setActiveForm(formName);
};

const renderForm = () => {
  switch (activeForm) {
    case 'formationdescription':
      return <FormationDescription />;
    case 'cardformation':
      return < CardFormateur/>;
    case 'carousselformation':
      return <CarousselFormation />;
    
    default:
      return null;
  }
};


return (
  <div className='container-trainings'>
<div className='main'>
<div class="cardBox">
      <div class="card" className="card" onClick={() => handleFormChange('formationdescription')}>
          <div class="numbers">Formation description</div>
      </div>
      <div class="card" className="card" onClick={() => handleFormChange('cardformation')}>
          <div class="numbers">Card formation</div>
      </div>
      <div class="card" className="card" onClick={() => handleFormChange('carousselformation')}>   
          <div class="numbers">Formation Caroussel </div>      
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

export default Formations
