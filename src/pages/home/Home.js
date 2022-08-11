import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Transaction from '../../components/transactions/Transaction';
import CategoryCard from '../../components/category-card/CategoryCard';

const Home = () => {
  return (
    <div className='home'>
    <Navbar />
    <Sidebar />
        <div className='content'>
          <Breadcrumb />
          <CategoryCard />
          <Transaction />
        </div>
    </div>
  )
}

export default Home