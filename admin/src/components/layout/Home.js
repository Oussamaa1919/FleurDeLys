import React from 'react'

const Home = () => {
  return (
    <div className='container-trainings'>
 <div className='main'>
 <div class="cardBox">
        <div class="card">
          <div>
            <div class="numbers">training form</div>
            
          </div>
          
        </div>
        <div class="card">
          <div>
            <div class="numbers">My form</div>
            
          </div>
          
        </div>
        <div class="card">
          <div>
           
            <div class="numbers">internship form</div>
          </div>
          
        </div>
        <div class="card">
          <div>
            
            <div class="numbers">inscription form</div>
          </div>
          
        </div>
      </div>
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
          placeholder="* Title"
          name="title"
         
          required
          />
        </div>

        <div className='form-group'>
         
         <input type="text"
          placeholder="* Company"
          name="companyname"
          
          required
          />
        </div>

        <div className='form-group'>
         <input 
          type="text"
          placeholder="* Description"
          name="description"
        
          required
          />
       </div>
       <div className='form-group'>
         <input 
          type="text"
          placeholder="* Type"
          name="type"
          
          required
          />
       
       </div>
       <div className='form-group'>
         <input 
         type="text" 
         placeholder="* Location"
         name="location"
          
          required
         />
      </div>
      <div className='form-group'> 
         <input
           type="text"
           placeholder="* Periode"
           name="periode"
          
          required
           />
           </div>
           <div className='form-group'>
         <input
          type="text"
         placeholder="* Technologies"
         name="technologies"
          
          required
         />
      </div>
       
      <div className='form-group'>
         <input
          type="text"
         placeholder="* Requirments"
         name="requirements"
          
          required
         />
      </div>

       <div className='form-group'> 
              <input
               type="date"
                placeholder="* Date"
                name="date"
               
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

export default Home
