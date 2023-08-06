import React,{ useState } from 'react'
import VideoDacceuil from './VideoDacceuil'
import InformationAcceuil from './InformationAcceuil'
import ForfaitsCaroussel from './ForfaitsCaroussel'
import CarousselAccel from './CarousselAccel'
const Home = () => {
  const [activeForm, setActiveForm] = useState('informationacceuil'); // Initial active form
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'informationacceuil':
        return <InformationAcceuil />;
      case 'videoacceuil':
        return < VideoDacceuil/>;
      case 'forfaitscaroussel':
        return <ForfaitsCaroussel />;
      case 'carousselaccel':
        return <CarousselAccel />;
      default:
        return null;
    }
  };


  return (
    <div className='container-trainings'>
 <div className='main'>
 <div class="cardBox">
        <div class="card" className="card" onClick={() => handleFormChange('informationacceuil')}>
            <div class="numbers">Information d'acceuil</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('videoacceuil')}>
            <div class="numbers">Video D'acceuil</div>
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('forfaitscaroussel')}>   
            <div class="numbers">Forfaits Caroussel </div>      
        </div>
        <div class="card" className="card" onClick={() => handleFormChange('carousselaccel')}>      
            <div class="numbers">Caroussel Accel</div>      
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

export default Home
