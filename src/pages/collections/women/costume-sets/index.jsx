import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const WomensCostumeSets = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default WomensCostumeSets;