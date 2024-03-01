import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const AccessoriesHolsters = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default AccessoriesHolsters;