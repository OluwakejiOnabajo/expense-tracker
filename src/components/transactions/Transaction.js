import { FaList } from 'react-icons/fa'
import './Transactions.css';

const Transaction = () => {
  return (
    <div className='transactions'>
     {/* <ul className='trans-header'>
        <li>January 15, 2022</li>
        <li>Number of transactions</li>
        <li>Value: <sapn>$21,904</sapn></li>
    </ul>   */}

    <div>
      <h4>Latest transactions</h4>
    </div>

    <div className="tranx-card">
      <FaList />
                <div className="tranx">
                  <p>School fee</p>
                    <h4 className='cat'>Salary</h4>
                    <small>2/22/222</small>
                </div>

                <div className="amount">
                    -$2,33.00
                </div>
            </div>

            <div className="tranx-card">
                <div className="tranx">
                  <p>School fee</p>
                    <h4 className='cat'>Salary</h4>
                    <small>2/22/222</small>
                </div>

                <div className="amount">
                    -$2,33.00
                </div>
            </div>
    </div>
  )
}

export default Transaction