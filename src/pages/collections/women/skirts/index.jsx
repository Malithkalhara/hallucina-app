import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";


const WomensSkirts = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default WomensSkirts;
