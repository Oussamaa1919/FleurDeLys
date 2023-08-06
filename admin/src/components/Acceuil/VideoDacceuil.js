import React from 'react'

const VideoDacceuil = () => {
  return (
    <div>
      <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Ajouter Votre video d'acceuil</h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form">
        <div className="form-group">
            <input
              type="file"
              placeholder="* videodacceuil"
              name="videodacceuil"    
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

export default VideoDacceuil
