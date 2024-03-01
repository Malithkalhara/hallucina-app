import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const AccessoriesCuffs = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default AccessoriesCuffs;