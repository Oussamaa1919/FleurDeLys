import React,{ useState } from 'react'
import Coiffure from './Coiffure';
import Coloration from './Coloration/Coloration';
import ExtensionDesCils from './ExtensionDesCils/ExtensionDesCils';
import Ongleries from './Ongleries';
import SoinsCheveux from './SoinsCheveux';
import SoinsVisages from './SoinsVisages';
import Maquillages from './Maquillages';
const NosServices = () => {

  const [activeForm, setActiveForm] = useState('ongleries'); // Initial active form
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'coiffure':
        return <Coiffure />;
      case 'coloraion':
        return < Coloration/>;
        case 'extension':
        return <ExtensionDesCils />;
      case 'maquillages':
        return < Maquillages/>;
        case 'ongleries':
        return <Ongleries />;
      case 'soinscheveux':
        return < SoinsCheveux/>;
        case 'soinsvisage':
        return < SoinsVisages/>;
     
      default:
        return null;
    }
  };
  return (
    <div className='container-trainings'>
 <div className='main'>
 <div class="cardBox">
        <div class="card" className="card" onClick={() => handleFormChange('ongleries')}>
            <div class="numbers">Ongleries</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('coloraion')}>
            <div class="numbers">Coloraion</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('extension')}>
            <div class="numbers">Extension Des Cils</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('maquillages')}>
            <div class="numbers">Maquillages</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('soinscheveux')}>
            <div class="numbers">Soins Cheveux</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('soinsvisage')}>
            <div class="numbers">Soins Visage</div>
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

export default NosServices
