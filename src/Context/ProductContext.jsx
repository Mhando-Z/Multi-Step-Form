import { createContext, useState } from "react";
import dataz from "../Assets/Data.json";

const ProductsContex = createContext();

export function ProductsProvider({ children }) {
  const [count, setCount] = useState(0);
  const { data } = dataz;
  const [showContent1, setContent] = useState(false);
  const [showContent2, setContent2] = useState(true);

  const handleShowContent = () => {
    if (showContent1 === false) {
      setContent(true);
      setContent2(false);
      setCount(1);
    }
  };
  const handleHideContent = () => {
    if (showContent1 === true) {
      setContent(false);
      setContent2(true);
      setCount(0);
    }
  };
  const handleincrement = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };
  const handledecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (count < 1) {
      setContent2(true);
      setContent(false);
    }
  };
  return (
    <ProductsContex.Provider
      value={{
        data,
        handleincrement,
        handledecrement,
        handleShowContent,
        handleHideContent,
        showContent1: showContent1,
        showContent2: showContent2,
        count: count,
      }}
    >
      {children}
    </ProductsContex.Provider>
  );
}

export default ProductsContex;
