import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const WomensTops = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default WomensTops;
