import React,{ useState } from 'react'
import AccesoiresCaroussel from './AccesoiresCaroussel';
import AccessoiresCarousselMimi from './AccessoiresCarousselMimi';
import BeforeAndAfter from './BeforeAndAfter';


const NosMariees = () => {
  const [activeForm, setActiveForm] = useState('beforeafter'); // Initial active form
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'beforeafter':
        return <BeforeAndAfter />;
      case 'accesoirescarousselmimi':
        return < AccessoiresCarousselMimi/>;
      case 'accesoirescaroussel':
        return <AccesoiresCaroussel />;
      
      default:
        return null;
    }
  };


  return (
    <div className='container-trainings'>
 <div className='main'>
 <div class="cardBox">
        <div class="card" className="card" onClick={() => handleFormChange('beforeafter')}>
            <div class="numbers">Before & After</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('accesoirescarousselmimi')}>
            <div class="numbers">Accessoires Caroussel Mimi</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('accesoirescaroussel')}>   
            <div class="numbers">Accesoires Caroussel </div>      
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

export default NosMariees
