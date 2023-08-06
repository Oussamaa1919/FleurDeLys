import React from 'react'

const AccessoiresCarousselMimi = () => {
  return (
    <div>
       <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Ajouter les images de la caroussel MiMi</h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form">
        <div className="form-group">
            <input
              type="file"
              placeholder="* imagesaccel"
              name="imagesaccel"    
              className='custom-file-input-resume'
              
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

export default AccessoiresCarousselMimi
