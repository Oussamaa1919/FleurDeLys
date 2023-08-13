import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForfait ,deleteForfait } from '../../actions/forfait';
import { Link} from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Forfaits = ({ 
  
  getForfait ,
  deleteForfait,
  forfait:{forfaits}
}) => {

  useEffect(() => {
    getForfait();
  },[getForfait])
  const [page, setPage] = useState(1)
  
  const selectPageHandle = (selectedPage) => { // Pagination Logic
    if (selectedPage >= 1 &&
        selectedPage <= forfaits.length / 1 &&
        selectedPage !== page) {
        setPage(selectedPage)
    }
}

  return (
    <div className='container-table2 '>
    <div className='main-table2'>
  <div className='userTable '>
  <h1 className='heading'>
      Forfaits:
  </h1>
  <Link to='/forfaitfrorm'>
  <button className='contactCTA contact '  type="button">ajouter Forfait</button>  
  </Link>
  
  <table className='table2'>
    <tbody>
      <tr>
          <th className='userAddress'>Title</th>
          
          <th className='userAction'>Delete</th>
      </tr>
      {
  forfaits.length > 0 ?  forfaits.slice(page * 5 - 5, page * 5).map((forfait, index) => {
    return (<tr >
      <td className='userAddress f-weight'>{forfait.titre}</td>
      
      <td className='contact' ><button className='contactCTA'
      onClick={()=>deleteForfait(forfait._id)} >Delete</button></td>

      
      
      
      
      
      
    </tr>)
  }) : <tr>
      <td colSpan="7" className="no-results">Il n'y a pas des forfiats .</td>
    </tr>
}
      </tbody>
  </table>

  

  {/* JSX PArt */}
  {
      forfaits.length > 0 && <div className='pagination'>
          <div className='arrows' onClick={() => selectPageHandle(page - 1)}>
              <MdKeyboardArrowLeft size={25} />
          </div>
          <div className='pageNumbers'>
              {
                   [...Array(Math.ceil(forfaits.length / 5))].map((n, i) => {
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

Forfaits.propTypes ={
  getForfait: PropTypes.func.isRequired,
  deleteForfait:PropTypes.func.isRequired,
  forfait: PropTypes.object.isRequired,
 }
 const mapStateToProps = (state) => ({
   forfait: state.forfait
 });
export default connect(mapStateToProps, { getForfait,deleteForfait }) (Forfaits)
