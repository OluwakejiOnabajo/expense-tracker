import './Navbar.css';
import { FaBell, FaUser, FaBars, FaSearch } from 'react-icons/fa';
 import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
          <FaBars className='toggle-bar' />

        <form className="navbar-search">
  <div className="form-group">
    <input type="text" className="form-control search-input" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
    {/* <div className="input-group-append">
      <button className="btn btn-primary" type="button">
        <FaSearch />
      </button>
    </div> */}
  </div>
</form>


        <ul className='user-not' >
            <li>
                <FaBell />
            </li>
            <li>
                <FaUser className='icon' />
                <div className='profile'>                    
                <span>Welcome!</span>
                <span>Oluwakeji Onabajo</span>
                </div>
            </li>
            </ul>
        
    </div>
  )
}

export default Navbar