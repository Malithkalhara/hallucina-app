import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const MensTops = () => {
  const { pathname } = useLocation();

  return <Product />;
};

export default MensTops;
