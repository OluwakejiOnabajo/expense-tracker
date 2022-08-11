import './Breadcrumb.css'
import { FaStore } from 'react-icons/fa';

const Breadcrumb = () => {
  return (   
    <div className='breadcrumb'>
    <FaStore className='breadcrumb-icon' />
    <div className='detail'>
    <h3>Home Wallet</h3>
    <small>Default wallet</small>
    </div>
</div>
  )
}

export default Breadcrumb