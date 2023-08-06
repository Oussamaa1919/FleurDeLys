import React from 'react'

const BeforeAndAfter = () => {
  return (
    <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Ajouter les images de before and after</h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form">
        <div className="form-group">
            <input
              type="file"
              placeholder="* imagebefore"
              name="imagebefore"    
              className='custom-file-input-resume'
              
              required         
            />                   
          </div>

          <div className="form-group">
            <input
              type="file"
              placeholder="* imageafter"
              name="imageafter"    
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

export default BeforeAndAfter
