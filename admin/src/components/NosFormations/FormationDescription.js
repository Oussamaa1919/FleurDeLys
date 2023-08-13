import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFormationDescription } from '../../actions/formationDescription'; 

const FormationDescription = ({createFormationDescription}) => {

  const [formData, setFormData] = useState({
    
    description: '',
    
  });
  const { description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  return (
    <div className='container-trainings'>
 <div className='main'>

 <div className="details">
 
     
   <div className="table">
     <div className="Header">
      
       <h2>Ajouter la description de la formation</h2>
       <small>* = required field</small>
     </div>
     <div className="internship">
     <form
   className="form"onSubmit={(e)=> {
    e.preventDefault();
    createFormationDescription(formData);
  }}>
         <div className='form-group'>
                <textarea
                    id="description"
                    name="description"
                    placeholder="* description"
                    value={description}
                    onChange={onChange}
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
FormationDescription.propTypes={
  createFormationDescription:PropTypes.func.isRequired,
}
export default connect(null,{createFormationDescription})(FormationDescription);
