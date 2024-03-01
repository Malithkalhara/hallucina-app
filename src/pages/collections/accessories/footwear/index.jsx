import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const AccessoriesFootwear = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default AccessoriesFootwear;