import { useState } from 'react'
import './Category.css';
import NewCat from '../../components/add-category/addCat';
import AllCat from '../../components/all-category/allCat';

const Category = () => {

  return (
    <>
    <NewCat />
    <AllCat />
    </>
  )
}

export default Category