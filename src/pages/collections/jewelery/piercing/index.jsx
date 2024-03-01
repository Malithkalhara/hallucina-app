import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const JeweleryPiercings = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default JeweleryPiercings;