import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.js';

// as the actual value we want to access
export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}