import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const JeweleryHair = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default JeweleryHair;