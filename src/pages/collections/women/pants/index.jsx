import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const WomensPants = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default WomensPants;
