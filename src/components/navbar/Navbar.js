import './Navbar.css';
import { FaBell, FaUser, FaBars } from 'react-icons/fa';
 import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="" className='brand'><h2>Xpenc Tracker</h2></Link>
          <FaBars className='toggle-bar' />

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