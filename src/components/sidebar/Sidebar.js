import './Sidebar.css';
import { FaHome, FaStore, FaChartLine, FaSignOutAlt, FaList} from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className='sidebar' >
    <Link to="" className='brand'><h3>Xpenc Tracker</h3></Link>
    <li><NavLink to="/" className='sidebar-item'> <FaHome className='icon' /> Home</NavLink></li>
    <li><NavLink to="" className='sidebar-item'> <FaStore className='icon' /> Wallets</NavLink></li>
    <li><NavLink to="" className='sidebar-item'> <FaList className='icon' /> Categories</NavLink></li>
    <li><NavLink to="" className='sidebar-item'> <FaChartLine className='icon' /> Transactions</NavLink></li>
    <li><NavLink to="" className='sidebar-item'> <FaSignOutAlt className='icon' /> Logout</NavLink></li>
    </ul>

    // <ul>
    //     <li>
    //         <NavLink to="d" className='sidebar-item'>
    //             <FaChartLine className='sidebar-icon' />
    //             <div className='detail'>
    //             <h4>Investment</h4>
    //             <span>$345,000</span>
    //             </div>
    //         </NavLink>
    //         </li>
    //         </ul>
   
//     <ul className='sidebar-list' >
//     <li className='sidebar-item'>
//                 <FaStore className='sidebar-icon' />
//                 <div className='detail'>
//                 <h4>Home Wallet</h4>
//                 <span>$345,000</span>
//                 </div>
//             </li>

//             <li>
//             <NavLink to="d" className='sidebar-item'>
//                 <FaChartLine className='sidebar-icon' />
//                 <div className='detail'>
//                 <h4>Investment</h4>
//                 <span>$345,000</span>
//                 </div>
//             </NavLink>
//             </li>
//             </ul>
   
// <div className='border-divider'></div>
//     <div className='sidebar-header'>
//     <h4>Categories</h4>
//     <FaPlus className='sidebar-icon' />
//     </div>


//     <ul className='sidebar-list' >
//             <li className='sidebar-item'>
//                 <FaList className='sidebar-icon' />
//                 <div>
//                 <h4>Bills</h4>
//                 <span>$235,000</span>
//                 </div>
//             </li>

            
//             <li className='sidebar-item'>
//                 <FaGraduationCap className='sidebar-icon' />
//                 <div>
//                 <h4>Education</h4>
//                 <span>$235,000</span>
//                 </div>
//             </li>

            
//             <li className='sidebar-item'>
//                 <FaTools className='sidebar-icon' />
//                 <div>
//                 <h4>Utility</h4>
//                 <span>$125,000</span>
//                 </div>
//             </li>

            
//             <li className='sidebar-item'>
//                 <FaShoppingBag className='sidebar-icon' />
//                 <div>
//                 <h4>Shopping</h4>
//                 <span>$331,000</span>
//                 </div>
//             </li>
//             </ul>
         
        
  )
}

export default Sidebar