import { useLocation } from "react-router-dom";

const AdminPanel = () => {
  const { pathname } = useLocation();

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
    </div>
  );
};

export default AdminPanel;
