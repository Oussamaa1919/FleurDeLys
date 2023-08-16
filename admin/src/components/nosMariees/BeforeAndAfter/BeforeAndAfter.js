import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBeforeAndAfters ,deleteBeforeAndAfter } from '../../../actions/beforeAndAfter';
import { Link} from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const BeforeAndAfter = ({ 
  
  getBeforeAndAfters ,
  deleteBeforeAndAfter,
  beforeAndafter:{beforeandafters}
}) => {

  useEffect(() => {
    getBeforeAndAfters();
  },[getBeforeAndAfters])

  const [page, setPage] = useState(1)
  
  const selectPageHandle = (selectedPage) => { // Pagination Logic
    if (selectedPage >= 1 &&
        selectedPage <= beforeandafters.length / 1 &&
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
  <Link to='/beforeandafterform'>
  <button className='contactCTA contact '  type="button">ajouter </button>  
  </Link>
  
  <table className='table2'>
    <tbody>
      <tr>
          <th className='userAddress'>Title</th>
          
          <th className='userAction'>Delete</th>
      </tr>
      {
  beforeandafters.length > 0 ?  beforeandafters.slice(page * 5 - 5, page * 5).map((beforeandafter, index) => {
    return (<tr >
      <td className='userAddress f-weight'>{beforeandafter.titre}</td>
      
      <td className='contact' ><button className='contactCTA'
      onClick={()=>deleteBeforeAndAfter(beforeandafter._id)} >Delete</button></td>

      
      
      
      
      
      
    </tr>)
  }) : <tr>
      <td colSpan="7" className="no-results">il n'y a pas d'article ici.</td>
    </tr>
}
      </tbody>
  </table>

  

  {/* JSX PArt */}
  {
      beforeandafters.length > 0 && <div className='bapagination'>
          <div className='arrows' onClick={() => selectPageHandle(page - 1)}>
              <MdKeyboardArrowLeft size={25} />
          </div>
          <div className='pageNumbers'>
              {
                   [...Array(Math.ceil(beforeandafters.length / 5))].map((n, i) => {
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

BeforeAndAfter.propTypes ={
  getBeforeAndAfters: PropTypes.func.isRequired,
  deleteBeforeAndAfter:PropTypes.func.isRequired,
  beforeAndafter: PropTypes.object.isRequired,
 }
 const mapStateToProps = (state) => ({
  beforeAndafter: state.beforeAndafter
 });
export default connect(mapStateToProps, { getBeforeAndAfters,deleteBeforeAndAfter }) (BeforeAndAfter)
