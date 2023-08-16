import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBeforeAndAfterColoration ,deleteBeforeAndAfterColoration } from '../../../actions/bAaColoration';
import { Link} from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Coloration = ({ 
  
  getBeforeAndAfterColoration ,
  deleteBeforeAndAfterColoration,
  bAaColoration:{beforeandaftercolorations}
}) => {

  useEffect(() => {
    getBeforeAndAfterColoration();
  },[getBeforeAndAfterColoration])

  const [page, setPage] = useState(1)
  
  const selectPageHandle = (selectedPage) => { // Pagination Logic
    if (selectedPage >= 1 &&
        selectedPage <= beforeandaftercolorations.length / 1 &&
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
  <Link to='/colorationform'>
  <button className='contactCTA contact '  type="button">ajouter article</button>  
  </Link>
  <Link to='/formcolorationdetails' style={{marginLeft:3}}>
  <button className='contactCTA contact '  type="button">modifier coloration  </button>  
  </Link>
  
  <table className='table2'>
    <tbody>
      <tr>
          <th className='userAddress'>Title</th>
          
          <th className='userAction'>Delete</th>
      </tr>
      {
  beforeandaftercolorations.length > 0 ?  beforeandaftercolorations.slice(page * 5 - 5, page * 5).map((beforeandaftercoloration, index) => {
    return (<tr >
      <td className='userAddress f-weight'>{beforeandaftercoloration.titre}</td>
      
      <td className='contact' ><button className='contactCTA'
      onClick={()=>deleteBeforeAndAfterColoration(beforeandaftercoloration._id)} >Delete</button></td>

    </tr>)
  }) : <tr>
      <td colSpan="7" className="no-results">il n'y a pas d'article ici.</td>
    </tr>
}
      </tbody>
  </table>
  
  

  {/* JSX PArt */}
  {
      beforeandaftercolorations.length > 0 && <div className='bapagination'>
          <div className='arrows' onClick={() => selectPageHandle(page - 1)}>
              <MdKeyboardArrowLeft size={25} />
          </div>
          <div className='pageNumbers'>
              {
                   [...Array(Math.ceil(beforeandaftercolorations.length / 5))].map((n, i) => {
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

Coloration.propTypes ={
  getBeforeAndAfterColoration: PropTypes.func.isRequired,
  deleteBeforeAndAfterColoration:PropTypes.func.isRequired,
  bAaColoration: PropTypes.object.isRequired,
 }
 const mapStateToProps = (state) => ({
  bAaColoration: state.bAaColoration
 });
export default connect(mapStateToProps, { getBeforeAndAfterColoration,deleteBeforeAndAfterColoration }) (Coloration)
