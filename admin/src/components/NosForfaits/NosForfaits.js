import React from 'react'

const NosForfaits = () => {
  return (
    <div className='container-trainings'>
    <div className='main'>
   
    <div className="details">
    
        
      <div className="table">
        <div className="Header">
         
          <h2>Ajouter le titre et l'images de votre forfait</h2>
          <small>* = required field</small>
        </div>
        <div className="internship">
        <form
      className="form">

<div className="form-group">
               <input
                 type="text"
                 placeholder="* titrle"
                 name="titre"    
                 
                 
                 required         
               />                   
             </div>

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

export default NosForfaits
