import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import fdl from '../../images/fdl.png'



const Navbar = ({ auth: { isAuthenticated} }) => {

//MenuToggle 

let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
function toggle  (){
  navigation.classList.toggle('active');
  main.classList.toggle('active')
}



  const authLinks = (
    <Fragment>
      <div className="main">
      <div className="topbar">
        <div className="toggle">
        <i className="fas fa-solid fa-bars" onClick={()=>toggle()} />
        </div>
        
        
        
        
        
      </div>
      
      </div>
    </Fragment>
  );
  const  guestLinks = (    
    <div>
    <div className='navbar-left'>

<h1 className='logo2'>
 
   <img  src={fdl} alt=''/>
 
</h1>
</div>

   <div className='main-wavy'>
   <div className='wavy'>  
   <span style={{ '--i':1 }}>W</span>
   <span style={{ '--i':2 }}>E</span>
   <span style={{ '--i':3 }}>L</span>
   <span style={{ '--i':4 }}>C</span>
   <span style={{ '--i':6 }}>O</span>
   <span style={{ '--i':7 }}>M</span>
   <span style={{ '--i':8}}>E</span>
   <span style={{ '--i':9 }}></span>
   <span style={{ '--i':10 }}>F</span>
   <span style={{ '--i':11}}>L</span>
   <span style={{ '--i':12}}>E</span>
   <span style={{ '--i':13}}>U</span>
   <span style={{ '--i':14}}>R</span>
   <span style={{ '--i':15}}></span>
   <span style={{ '--i':16}}>D</span>
   <span style={{ '--i':17 }}>E</span>
   <span style={{ '--i':18}}></span>
   <span style={{ '--i':19}}>L</span>
   <span style={{ '--i':20}}>y</span>
   <span style={{ '--i':21}}>s</span>
   

   
   <span style={{ '--i':20}}><i className="fas fa-solid fa-hand-sparkles"></i></span>

   </div>
 </div>
 </div>
  
   
   
 );


  return (
    <div className='container'>
      <nav className='navbar bg-dark' > 
      <Fragment>{isAuthenticated ? authLinks  : guestLinks }</Fragment>
    </nav>
    </div>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps) (Navbar)

