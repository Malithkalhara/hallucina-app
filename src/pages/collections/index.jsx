import { Route, Routes, useLocation } from "react-router-dom";
import MensPants from "./men/pants";
import MensTops from "./men/tops";

const Collections = () => {
  const { pathname } = useLocation();

  return (
    <Routes>
      {/* <Route index element={<Product />} /> */}
      <Route path="mens-tops" element={<MensTops />} />
      <Route path="mens-pants" element={<MensPants />} />
    </Routes>
  );
};

export default Collections;
