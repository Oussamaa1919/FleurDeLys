import React from 'react'

const FormationDescription = () => {
  return (
    <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Ajouter les information d'acceuil</h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form">
         <div className='form-group'>
         
         <input type="text"
          placeholder="* Description"
          name="Description"
         
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

export default FormationDescription
