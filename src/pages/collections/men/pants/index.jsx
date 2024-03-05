import { useLocation } from "react-router-dom";
import { Product } from "../../../product/Product";

const MensPants = () => {
  const { pathname } = useLocation();

  return <Product title="Pants" />;
};

export default MensPants;
