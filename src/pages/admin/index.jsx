import { Routes, useLocation } from "react-router-dom";
import AdminPanel from "./admin-panel";

const Admin = () => {
  const { pathname } = useLocation();

  return (
    <Routes>
      <Route index element={<AdminPanel />} />
      {/* <Route path="mens-tops" element={<MensTops />} /> */}
    </Routes>
  );
};

export default Admin;
