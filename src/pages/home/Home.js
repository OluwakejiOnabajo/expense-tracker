import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Transaction from '../../components/transactions/Transaction';
import CategoryCard from '../../components/category-card/CategoryCard';

const Home = () => {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content-wrapper'>
        <div className='content'>
          <Navbar />
          <div className='container'>
            <Breadcrumb />
            <CategoryCard />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home