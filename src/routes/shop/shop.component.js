import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCatecoriesStart } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatecoriesStart())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  )
}

export default Shop;