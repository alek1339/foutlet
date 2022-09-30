import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json';

// as the actual value we want to access
export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}