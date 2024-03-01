import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const JeweleryBodyJewelery = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default JeweleryBodyJewelery;