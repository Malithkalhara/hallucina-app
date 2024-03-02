import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const MensCostumeSets = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default MensCostumeSets;