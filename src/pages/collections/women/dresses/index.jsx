import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const WomensDresses = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default WomensDresses;
