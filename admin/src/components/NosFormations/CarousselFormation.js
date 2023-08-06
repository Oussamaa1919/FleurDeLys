import React from 'react'

const CarousselFormation = () => {
  return (
    <div className='container-trainings'>
    <div className='main'>
   
    <div className="details">
    
        
      <div className="table">
        <div className="Header">
         
          <h2>Ajouter les images des formations</h2>
          <small>* = required field</small>
        </div>
        <div className="internship">
        <form
      className="form">
           <div className="form-group">
               <input
                 type="file"
                 placeholder="* imagesforfaits"
                 name="imagesforfaits"    
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
  )
}

export default CarousselFormation
