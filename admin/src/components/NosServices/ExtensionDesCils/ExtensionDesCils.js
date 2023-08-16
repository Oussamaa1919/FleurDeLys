import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBeforeAndAfterExtension ,deleteBeforeAndAfterExtension } from '../../../actions/bAaExtension';
import { Link} from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ExtensionDesCils = ({ 
  
  getBeforeAndAfterExtension ,
  deleteBeforeAndAfterExtension,
  bAaExtension:{beforeandafterextensions}
}) => {

  useEffect(() => {
    getBeforeAndAfterExtension();
  },[getBeforeAndAfterExtension])

  const [page, setPage] = useState(1)
  
  const selectPageHandle = (selectedPage) => { // Pagination Logic
    if (selectedPage >= 1 &&
        selectedPage <= beforeandafterextensions.length / 1 &&
        selectedPage !== page) {
        setPage(selectedPage)
    }
}

  return (
    <div className='container-table2 '>
    <div className='main-table2'>
  <div className='userTable '>
  <h1 className='heading'>
    La liste de before and after :
  </h1>
  <Link to='/extensionform'>
  <button className='contactCTA contact '  type="button">ajouter </button>  
  </Link>
  <Link to='/formextensiondetails' style={{marginLeft:3}}>
  <button className='contactCTA contact '  type="button">modifier extension </button>  
  </Link>
  
  <table className='table2'>
    <tbody>
      <tr>
          <th className='userAddress'>Title</th>
          
          <th className='userAction'>Delete</th>
      </tr>
      {
  beforeandafterextensions.length > 0 ?  beforeandafterextensions.slice(page * 5 - 5, page * 5).map((beforeandafterextension, index) => {
    return (<tr >
      <td className='userAddress f-weight'>{beforeandafterextension.titre}</td>
      
      <td className='contact' ><button className='contactCTA'
      onClick={()=>deleteBeforeAndAfterExtension(beforeandafterextension._id)} >Delete</button></td>

      
      
      
      
      
      
    </tr>)
  }) : <tr>
      <td colSpan="7" className="no-results">il n'y a pas d'article ici.</td>
    </tr>
}
      </tbody>
  </table>

  

  {/* JSX PArt */}
  {
      beforeandafterextensions.length > 0 && <div className='bapagination'>
          <div className='arrows' onClick={() => selectPageHandle(page - 1)}>
              <MdKeyboardArrowLeft size={25} />
          </div>
          <div className='pageNumbers'>
              {
                   [...Array(Math.ceil(beforeandafterextensions.length / 5))].map((n, i) => {
                      return <div  
                      className={`num ${page === i + 1 ? `numActive` : ''}`} 
                      onClick={() => selectPageHandle(i + 1)} >{i + 1}</div>
                  })
              }
          </div>
          <div className='arrows' onClick={() => selectPageHandle(page + 1)}>
              <MdKeyboardArrowRight size={25} />
          </div>
      </div>
  }
</div>
</div>
</div>
)
}

ExtensionDesCils.propTypes ={
  getBeforeAndAfters: PropTypes.func.isRequired,
  deleteBeforeAndAfter:PropTypes.func.isRequired,
  bAaExtension: PropTypes.object.isRequired,
 }
 const mapStateToProps = (state) => ({
  bAaExtension: state.bAaExtension
 });
export default connect(mapStateToProps, { getBeforeAndAfterExtension,deleteBeforeAndAfterExtension }) (ExtensionDesCils)
