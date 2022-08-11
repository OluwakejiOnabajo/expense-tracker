//STYLES
import './CategoryCard.css';
import { FaList } from 'react-icons/fa';

// //UTILS
// import { useEffect, useState } from "react";

 const CategoryCard = () => {
//   const [style, setStyle] = useState({});
//   const categoryStyle = () => {

//         switch (key) {
//             case value:

                
//                 break;
        
//             default:
//                 break;
//         }

//     switch (category) {
//       default: {
//         return {
//           ctg: "Other",
//           icon: <HiOutlineFire style={{ color: "#ffbece" }} />,
//           background: "#ff6275",
//         };
//       }
//       case "Products":
//       case 1: {
//         return {
//           ctg: "Products",
//           icon: <FiBox style={{ color: "#fdeacc" }} />,
//           background: "#f8aa35",
//         };
//       }

//       case "Entertainment":
//       case 2:
//         return {
//           ctg: "Entertainment",
//           icon: <IoGameControllerOutline style={{ color: "#e4f1d5" }} />,
//           background: "#92c44c",
//         };

//       case "Bills":
//       case 3: {
//         return {
//           ctg: "Bills",
//           icon: <BsHouseDoor style={{ color: "#b7dffd" }} />,
//           background: "#5a92d6",
//         };
//       }
//     }
//   };

//   useEffect(() => {
//     setStyle(categoryStyle());
//   }, []);

  return (
    <div className="card-container">
  <div className="card-item card-info">
    <FaList className="card-icon" />
    <div className="card-details">
        <h5 className='card-title'>Salary</h5>
        <small>$235,000</small>
  </div>
  </div>


  <div className="card-item card-info">
    <FaList className="card-icon" />
    <div className="card-details">
    <h5 className='card-title'>Side hustle</h5>
        <small>$235,000</small>
  </div>
  </div>

  
  <div className="card-item card-info">
    <FaList className="card-icon" />
    <div className="card-details">
        <h5 className='card-title'>Utility</h5>
        <small>$235,000</small>
  </div>
  </div>

  <div className="card-item card-success">    
  <FaList className="card-icon" />
    <div className="card-details">
        <h5 className='card-title'>Housing</h5>
        <small>$235,000</small>
  </div>
  </div>

  <div className="card-item card-warning">    
  <FaList className="card-icon" />
    <div className="card-details">
        <h5 className='card-title'>Transportation ggggggg</h5>
        <small>$235,000</small>
  </div>
  </div>

  
  <div className="card-item card-primary">    
  <FaList className="card-icon" />
    <div className="card-details">
        <h5 className='card-title'>Healthcare</h5>
        <small>$235,000</small>
  </div>
  </div>

  <div className="card-item card-light">
    <FaList className="card-icon" />
    <div className="card-details">
        <h5 className='card-title'>Others</h5>
        <small>$235,000</small>
  </div>

  </div>
  </div>

  );
};

export default CategoryCard;