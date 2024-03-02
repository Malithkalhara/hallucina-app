import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const JeweleryNeck = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default JeweleryNeck;