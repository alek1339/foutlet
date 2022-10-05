import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js';

// as the actual value we want to access
export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap()
  }, [])

  // Dont need until I want to upload new data
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  const value = { categoriesMap, setCategoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}