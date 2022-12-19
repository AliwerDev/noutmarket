import { createContext } from "react";

const CategoriesContext = createContext({
  products: [],
  setProducts: () => {},
});

export default CategoriesContext;
