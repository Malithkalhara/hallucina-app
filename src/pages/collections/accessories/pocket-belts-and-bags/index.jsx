import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const AccessoriesPocketBeltsAndBags = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default AccessoriesPocketBeltsAndBags;