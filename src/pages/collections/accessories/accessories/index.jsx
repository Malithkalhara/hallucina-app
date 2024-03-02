import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const AccessoriesAccessories = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default AccessoriesAccessories;